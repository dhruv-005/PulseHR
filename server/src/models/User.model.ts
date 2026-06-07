import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role: "super_admin" | "hr_manager" | "dept_head" | "team_lead" | "employee";
  jobTitle: string;
  department: string;
  managerId?: mongoose.Types.ObjectId;
  dateOfJoining: Date;
  dateOfBirth?: Date;
  salary: number;
  status: "active" | "inactive" | "on_leave" | "resigned";
  avatar?: string;
  skills: string[];
  location?: string;
  performanceScore?: number;
  attritionRisk?: number;
  refreshToken?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    employeeId: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String, trim: true },
    role: {
      type: String,
      enum: ["super_admin", "hr_manager", "dept_head", "team_lead", "employee"],
      default: "employee",
    },
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    managerId: { type: Schema.Types.ObjectId, ref: "User" },
    dateOfJoining: { type: Date, required: true },
    dateOfBirth: { type: Date },
    salary: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["active", "inactive", "on_leave", "resigned"],
      default: "active",
    },
    avatar: { type: String },
    skills: [{ type: String }],
    location: { type: String },
    performanceScore: { type: Number, min: 0, max: 100 },
    attritionRisk: { type: Number, min: 0, max: 100 },
    refreshToken: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.password;
        delete ret.refreshToken;
        return ret;
      },
    },
  }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Generate employee ID
UserSchema.pre("save", async function (next) {
  if (!this.isNew) return next();
  const count = await mongoose.model("User").countDocuments();
  this.employeeId = `EMP${String(count + 1).padStart(5, "0")}`;
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Indexes
UserSchema.index({ department: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ status: 1 });
UserSchema.index({ managerId: 1 });

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
