"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewEmployeePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName:"", lastName:"", email:"", phone:"",
    jobTitle:"", department:"Engineering", salary:"",
    dateOfJoining:"", role:"employee", location:"",
    skills:"", emergencyContact:"", bloodGroup:"",
    address:"", linkedin:"", bio:""
  });
  const [errors, setErrors] = useState({});

  const depts = ["Engineering","Product","Design","Sales","Marketing","HR","Finance","Operations","Analytics","DevOps"];
  const roles = ["employee","team_lead","dept_head","hr_manager","super_admin"];
  const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

  const validate = () => {
    const e = {};
    if (!form.firstName) e.firstName = "Required";
    if (!form.lastName) e.lastName = "Required";
    if (!form.email || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.jobTitle) e.jobTitle = "Required";
    if (!form.salary || isNaN(Number(form.salary))) e.salary = "Valid number required";
    if (!form.dateOfJoining) e.dateOfJoining = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => router.push("/employees"), 2000);
  };

  const set = (field, val) => {
    setForm(f => ({...f, [field]: val}));
    setErrors(e => ({...e, [field]: ""}));
  };

  const inputStyle = (field) => ({
    width:"100%", background:"rgba(255,255,255,0.05)",
    border:`1px solid ${errors[field] ? "#ef4444" : "rgba(255,255,255,0.12)"}`,
    borderRadius:"10px", padding:"10px 14px",
    color:"hsl(var(--foreground))", outline:"none",
    fontSize:"0.875rem", boxSizing:"border-box",
    transition:"border-color 0.2s"
  });

  const labelStyle = {
    fontSize:"0.75rem", fontWeight:500,
    color:"hsl(var(--foreground))", display:"block", marginBottom:"6px"
  };

  const steps = ["Personal Info", "Job Details", "Additional Info"];

  return (
    <div style={{maxWidth:"800px"}}>
      {success && (
        <div style={{background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"12px",padding:"16px 20px",marginBottom:"20px",color:"#22c55e",display:"flex",alignItems:"center",gap:"10px"}}>
          <span style={{fontSize:"1.25rem"}}>✅</span>
          <span>Employee added successfully! Redirecting to employees list...</span>
        </div>
      )}

      <div style={{display:"flex",alignItems:"center",gap:"16px",marginBottom:"24px"}}>
        <Link href="/employees" style={{width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"1rem",flexShrink:0}}>←</Link>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Add New Employee</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Onboard a new team member to your organization</p>
        </div>
      </div>

      <div style={{display:"flex",gap:"8px",marginBottom:"24px"}}>
        {steps.map((s, i) => (
          <div key={i} onClick={() => setStep(i+1)} style={{flex:1,padding:"12px",borderRadius:"10px",border:`1px solid ${step===i+1?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.08)"}`,background:step===i+1?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.02)",cursor:"pointer",textAlign:"center",transition:"all 0.2s"}}>
            <div style={{fontSize:"1rem",marginBottom:"4px"}}>{step>i+1?"✅":step===i+1?"🔵":"⚪"}</div>
            <div style={{fontSize:"0.75rem",color:step===i+1?"hsl(var(--foreground))":"hsl(var(--muted-foreground))",fontWeight:step===i+1?500:400}}>Step {i+1}: {s}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"28px",marginBottom:"16px"}}>

          {step === 1 && (
            <div>
              <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Personal Information</h2>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                {[["First Name","firstName","text","John"],["Last Name","lastName","text","Doe"],["Email","email","email","john@company.com"],["Phone","phone","tel","+91 9999999999"],["Blood Group","bloodGroup","select",""],["LinkedIn","linkedin","url","linkedin.com/in/john"]].map(([label,field,type,ph]) => (
                  <div key={field}>
                    <label style={labelStyle}>{label}{["firstName","lastName","email"].includes(field)&&<span style={{color:"#ef4444"}}>*</span>}</label>
                    {type === "select" ? (
                      <select value={form[field]} onChange={e => set(field, e.target.value)} style={inputStyle(field)}>
                        <option value="">Select Blood Group</option>
                        {bloodGroups.map(b => <option key={b} style={{background:"hsl(var(--card))"}}>{b}</option>)}
                      </select>
                    ) : (
                      <input type={type} placeholder={ph} value={form[field]} onChange={e => set(field, e.target.value)} style={inputStyle(field)}/>
                    )}
                    {errors[field] && <p style={{fontSize:"0.7rem",color:"#ef4444",marginTop:"4px"}}>⚠ {errors[field]}</p>}
                  </div>
                ))}
                <div style={{gridColumn:"1/-1"}}>
                  <label style={labelStyle}>Address</label>
                  <input type="text" placeholder="123 Main St, Mumbai, Maharashtra" value={form.address} onChange={e => set("address", e.target.value)} style={inputStyle("address")}/>
                </div>
                <div style={{gridColumn:"1/-1"}}>
                  <label style={labelStyle}>Emergency Contact</label>
                  <input type="text" placeholder="Name - Relation - Phone" value={form.emergencyContact} onChange={e => set("emergencyContact", e.target.value)} style={inputStyle("emergencyContact")}/>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Job Details</h2>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                {[["Job Title","jobTitle","text","Software Engineer"],["Salary (₹/year)","salary","number","800000"],["Date of Joining","dateOfJoining","date",""],["Location","location","text","Mumbai, India"]].map(([label,field,type,ph]) => (
                  <div key={field}>
                    <label style={labelStyle}>{label}<span style={{color:"#ef4444"}}>*</span></label>
                    <input type={type} placeholder={ph} value={form[field]} onChange={e => set(field, e.target.value)} style={inputStyle(field)}/>
                    {errors[field] && <p style={{fontSize:"0.7rem",color:"#ef4444",marginTop:"4px"}}>⚠ {errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Department</label>
                  <select value={form.department} onChange={e => set("department", e.target.value)} style={inputStyle("department")}>
                    {depts.map(d => <option key={d} style={{background:"hsl(var(--card))"}}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Role / Access Level</label>
                  <select value={form.role} onChange={e => set("role", e.target.value)} style={inputStyle("role")}>
                    {roles.map(r => <option key={r} style={{background:"hsl(var(--card))"}}>{r.replace("_"," ")}</option>)}
                  </select>
                </div>
              </div>
              {form.salary && (
                <div style={{marginTop:"16px",padding:"12px 16px",background:"rgba(34,197,94,0.08)",border:"1px solid rgba(34,197,94,0.15)",borderRadius:"10px"}}>
                  <p style={{fontSize:"0.8rem",color:"#22c55e"}}>💰 Monthly: ₹{Math.round(Number(form.salary)/12).toLocaleString()} · Annual CTC: ₹{Number(form.salary).toLocaleString()}</p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Additional Information</h2>
              <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                <div>
                  <label style={labelStyle}>Skills (comma separated)</label>
                  <input type="text" placeholder="React, Node.js, Python, AWS..." value={form.skills} onChange={e => set("skills", e.target.value)} style={inputStyle("skills")}/>
                  {form.skills && (
                    <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginTop:"8px"}}>
                      {form.skills.split(",").filter(s=>s.trim()).map((skill,i) => (
                        <span key={i} style={{fontSize:"0.7rem",padding:"3px 10px",borderRadius:"999px",background:"rgba(59,130,246,0.1)",color:"#3b82f6",border:"1px solid rgba(59,130,246,0.2)"}}>{skill.trim()}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Bio / About</label>
                  <textarea rows={4} placeholder="Brief description about the employee..." value={form.bio} onChange={e => set("bio", e.target.value)} style={{...inputStyle("bio"),resize:"none"}}/>
                </div>
                <div style={{padding:"20px",background:"rgba(255,255,255,0.02)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)"}}>
                  <h3 style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"12px"}}>📋 Summary</h3>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                    {[["Name",(form.firstName+" "+form.lastName).trim()||"—"],["Email",form.email||"—"],["Department",form.department],["Role",form.role.replace("_"," ")],["Job Title",form.jobTitle||"—"],["Salary",form.salary?"₹"+Number(form.salary).toLocaleString():"—"],["Joining",form.dateOfJoining||"—"],["Location",form.location||"—"]].map(([label,val]) => (
                      <div key={label} style={{display:"flex",flexDirection:"column",gap:"2px"}}>
                        <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>{label}</span>
                        <span style={{fontSize:"0.8rem",color:"hsl(var(--foreground))",fontWeight:500}}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{display:"flex",gap:"12px",justifyContent:"space-between"}}>
          <div style={{display:"flex",gap:"8px"}}>
            {step > 1 && (
              <button type="button" onClick={() => setStep(s => s-1)} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>← Previous</button>
            )}
            <Link href="/employees" style={{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--muted-foreground))",textDecoration:"none",fontSize:"0.875rem",display:"inline-flex",alignItems:"center"}}>Cancel</Link>
          </div>
          {step < 3 ? (
            <button type="button" onClick={() => { if(step===1&&!validate()&&(form.firstName||form.lastName||form.email)){} setStep(s => s+1); }} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Next Step →</button>
          ) : (
            <button type="submit" disabled={loading} style={{background:loading?"rgba(255,255,255,0.05)":"rgba(34,197,94,0.15)",border:`1px solid ${loading?"rgba(255,255,255,0.08)":"rgba(34,197,94,0.3)"}`,borderRadius:"10px",padding:"10px 28px",color:loading?"hsl(var(--muted-foreground))":"#22c55e",cursor:loading?"not-allowed":"pointer",fontSize:"0.875rem",display:"flex",alignItems:"center",gap:"8px"}}>
              {loading ? <><span style={{display:"inline-block",width:"14px",height:"14px",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}/> Adding...</> : "✅ Add Employee"}
            </button>
          )}
        </div>
      </form>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
