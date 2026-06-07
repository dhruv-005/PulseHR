"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    firstName:"John", lastName:"Doe", email:"admin@pulseHR.com",
    phone:"+91 9876543210", jobTitle:"Super Admin", department:"HR",
    location:"Mumbai, India", bio:"Experienced HR professional with 10+ years managing enterprise HR operations.",
    joined:"2019-01-15", employeeId:"EMP00001", role:"super_admin",
    linkedin:"linkedin.com/in/johndoe", skills:["HR Analytics","Team Management","Strategic Planning","AI Tools"],
    bloodGroup:"B+", emergencyContact:"Jane Doe - Wife - +91 9876543211"
  });
  const [tempProfile, setTempProfile] = useState({...profile});

  const handleSave = () => {
    setProfile({...tempProfile});
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setTempProfile({...profile});
    setEditing(false);
  };

  const inputStyle = {
    background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.12)",
    borderRadius:"8px", padding:"8px 12px", color:"hsl(var(--foreground))",
    outline:"none", fontSize:"0.875rem", width:"100%", boxSizing:"border-box"
  };

  const stats = [
    {label:"Performance Score",value:"94%",color:"#22c55e",icon:"📊"},
    {label:"Goals Completed",value:"18/20",color:"#3b82f6",icon:"🎯"},
    {label:"Leave Balance",value:"14 days",color:"#8b5cf6",icon:"📅"},
    {label:"Team Size",value:"2,847",color:"#f59e0b",icon:"👥"},
  ];

  const activities = [
    {action:"Approved leave request for Priya Singh",time:"10 minutes ago",icon:"✅"},
    {action:"Reviewed Q4 performance report",time:"2 hours ago",icon:"📊"},
    {action:"Added new employee Kavya Reddy",time:"Yesterday",icon:"👤"},
    {action:"Updated attrition risk scores",time:"2 days ago",icon:"🔮"},
    {action:"Exported monthly HR report",time:"3 days ago",icon:"📄"},
  ];

  return (
    <div style={{maxWidth:"1000px"}}>
      {saved && (
        <div style={{background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"12px",padding:"14px 20px",marginBottom:"20px",color:"#22c55e",display:"flex",alignItems:"center",gap:"10px"}}>
          ✅ Profile updated successfully!
        </div>
      )}

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>My Profile</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Manage your personal information and preferences</p>
        </div>
        <div style={{display:"flex",gap:"8px"}}>
          {editing ? (
            <>
              <button onClick={handleCancel} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Cancel</button>
              <button onClick={handleSave} style={{background:"rgba(34,197,94,0.15)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"10px 20px",color:"#22c55e",cursor:"pointer",fontSize:"0.875rem"}}>💾 Save Changes</button>
            </>
          ) : (
            <button onClick={() => setEditing(true)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>✏️ Edit Profile</button>
          )}
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"24px",marginBottom:"24px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px",textAlign:"center"}}>
            <div style={{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg,rgba(59,130,246,0.4),rgba(139,92,246,0.4))",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",fontWeight:700,color:"white",margin:"0 auto 16px",border:"3px solid rgba(255,255,255,0.1)"}}>
              {profile.firstName[0]}{profile.lastName[0]}
            </div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"4px"}}>{profile.firstName} {profile.lastName}</h2>
            <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",marginBottom:"8px"}}>{profile.jobTitle}</p>
            <span style={{fontSize:"0.7rem",padding:"4px 12px",borderRadius:"999px",background:"rgba(59,130,246,0.1)",color:"#3b82f6"}}>{profile.role.replace("_"," ")}</span>
            <div style={{marginTop:"16px",padding:"12px",background:"rgba(255,255,255,0.02)",borderRadius:"10px",textAlign:"left"}}>
              {[["🆔",profile.employeeId],["🏢",profile.department],["📍",profile.location],["📅","Joined "+profile.joined]].map(([icon,val]) => (
                <div key={val} style={{display:"flex",gap:"8px",alignItems:"center",marginBottom:"6px"}}>
                  <span>{icon}</span>
                  <span style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
            <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"12px"}}>Skills</h3>
            <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
              {profile.skills.map(skill => (
                <span key={skill} style={{fontSize:"0.7rem",padding:"4px 10px",borderRadius:"999px",background:"rgba(139,92,246,0.1)",color:"#8b5cf6",border:"1px solid rgba(139,92,246,0.2)"}}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            {stats.map(stat => (
              <div key={stat.label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"16px"}}>
                <div style={{fontSize:"1.25rem",marginBottom:"6px"}}>{stat.icon}</div>
                <div style={{fontSize:"1.5rem",fontFamily:"Instrument Serif,serif",color:stat.color}}>{stat.value}</div>
                <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
            <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Personal Information</h3>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
              {editing ? (
                <>
                  {[["First Name","firstName"],["Last Name","lastName"],["Email","email"],["Phone","phone"],["Job Title","jobTitle"],["Location","location"]].map(([label,field]) => (
                    <div key={field}>
                      <label style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",display:"block",marginBottom:"4px"}}>{label}</label>
                      <input value={tempProfile[field]} onChange={e => setTempProfile(p => ({...p,[field]:e.target.value}))} style={inputStyle}/>
                    </div>
                  ))}
                  <div style={{gridColumn:"1/-1"}}>
                    <label style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",display:"block",marginBottom:"4px"}}>Bio</label>
                    <textarea rows={3} value={tempProfile.bio} onChange={e => setTempProfile(p => ({...p,bio:e.target.value}))} style={{...inputStyle,resize:"none"}}/>
                  </div>
                </>
              ) : (
                [["Full Name",profile.firstName+" "+profile.lastName],["Email",profile.email],["Phone",profile.phone],["Department",profile.department],["Job Title",profile.jobTitle],["Location",profile.location],["Blood Group",profile.bloodGroup],["Emergency Contact",profile.emergencyContact]].map(([label,val]) => (
                  <div key={label}>
                    <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginBottom:"2px"}}>{label}</div>
                    <div style={{fontSize:"0.875rem",color:"hsl(var(--foreground))",fontWeight:500}}>{val}</div>
                  </div>
                ))
              )}
            </div>
            {!editing && profile.bio && (
              <div style={{marginTop:"16px",padding:"12px",background:"rgba(255,255,255,0.02)",borderRadius:"8px",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginBottom:"4px"}}>About</div>
                <div style={{fontSize:"0.8rem",color:"hsl(var(--foreground))",lineHeight:"1.5"}}>{profile.bio}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
        <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Recent Activity</h3>
        <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
          {activities.map((act,i) => (
            <div key={i} style={{display:"flex",gap:"14px",alignItems:"center",padding:"12px 0",borderBottom:i<activities.length-1?"1px solid rgba(255,255,255,0.04)":"none"}}>
              <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",flexShrink:0}}>{act.icon}</div>
              <div style={{flex:1,fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{act.action}</div>
              <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",flexShrink:0}}>{act.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
