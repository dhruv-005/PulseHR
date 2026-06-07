"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [tab, setTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  const [profile, setProfile] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pulseHR_profile");
      if (saved) return JSON.parse(saved);
    }
    return {firstName:"John",lastName:"Doe",email:"admin@pulseHR.com",phone:"+91 9876543210",jobTitle:"Super Admin",department:"HR"};
  });

  const [passwords, setPasswords] = useState({current:"",newPass:"",confirm:""});
  const [passError, setPassError] = useState("");
  const [passSaved, setPassSaved] = useState(false);

  const [notifications, setNotifications] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pulseHR_notifications");
      if (saved) return JSON.parse(saved);
    }
    return {performance:true,reviews:true,leave:true,attrition:true,reports:false,weekly:false,email:true,sms:false};
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("pulseHR_theme") || "dark";
    return "dark";
  });

  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== "undefined") return localStorage.getItem("pulseHR_fontSize") || "medium";
    return "medium";
  });

  const [company, setCompany] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("pulseHR_company");
      if (saved) return JSON.parse(saved);
    }
    return {name:"Acme Corporation",industry:"Technology",size:"1000-5000",timezone:"Asia/Kolkata",currency:"INR",fiscal:"April - March",address:"Mumbai, Maharashtra, India"};
  });

  const showSaved = (msg = "Settings saved successfully!") => {
    setSaveMsg(msg);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const saveProfile = () => {
    localStorage.setItem("pulseHR_profile", JSON.stringify(profile));
    showSaved("Profile updated successfully!");
  };

  const savePassword = () => {
    if (!passwords.current) { setPassError("Enter current password"); return; }
    if (passwords.newPass.length < 6) { setPassError("Password must be at least 6 characters"); return; }
    if (passwords.newPass !== passwords.confirm) { setPassError("Passwords do not match"); return; }
    setPassError("");
    setPasswords({current:"",newPass:"",confirm:""});
    setPassSaved(true);
    setTimeout(() => setPassSaved(false), 3000);
    showSaved("Password updated successfully!");
  };

  const saveNotifications = () => {
    localStorage.setItem("pulseHR_notifications", JSON.stringify(notifications));
    showSaved("Notification preferences saved!");
  };

  const saveTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("pulseHR_theme", newTheme);
    document.documentElement.className = newTheme;
    showSaved("Theme applied successfully!");
  };

  const saveFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem("pulseHR_fontSize", size);
    const sizes = {small:"14px",medium:"16px",large:"18px"};
    document.documentElement.style.fontSize = sizes[size];
    showSaved("Font size applied!");
  };

  const saveCompany = () => {
    localStorage.setItem("pulseHR_company", JSON.stringify(company));
    showSaved("Company settings saved!");
  };

  const inputStyle = {
    width:"100%", background:"rgba(255,255,255,0.05)",
    border:"1px solid rgba(255,255,255,0.12)", borderRadius:"10px",
    padding:"10px 14px", color:"hsl(var(--foreground))",
    outline:"none", fontSize:"0.875rem", boxSizing:"border-box"
  };

  const labelStyle = {
    fontSize:"0.75rem", fontWeight:500,
    color:"hsl(var(--foreground))", display:"block", marginBottom:"6px"
  };

  const tabs = [
    {id:"profile",label:"👤 Profile"},
    {id:"security",label:"🔒 Security"},
    {id:"notifications",label:"🔔 Notifications"},
    {id:"appearance",label:"🎨 Appearance"},
    {id:"company",label:"🏢 Company"},
  ];

  return (
    <div style={{maxWidth:"900px"}}>
      {saved && (
        <div style={{background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"12px",padding:"14px 20px",marginBottom:"20px",color:"#22c55e",display:"flex",alignItems:"center",gap:"10px",position:"sticky",top:"80px",zIndex:10}}>
          ✅ {saveMsg}
        </div>
      )}
      <div style={{marginBottom:"24px"}}>
        <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Settings</h1>
        <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Manage your account, appearance, and preferences</p>
      </div>
      <div style={{display:"flex",gap:"0",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"28px",flexWrap:"wrap"}}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{padding:"12px 20px",fontSize:"0.875rem",border:"none",borderBottom:`2px solid ${tab===t.id?"hsl(var(--foreground))":"transparent"}`,background:"transparent",color:tab===t.id?"hsl(var(--foreground))":"hsl(var(--muted-foreground))",cursor:"pointer",marginBottom:"-1px",transition:"all 0.2s",whiteSpace:"nowrap"}}>{t.label}</button>
        ))}
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"32px"}}>

        {tab === "profile" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Profile Information</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
              {[["First Name","firstName"],["Last Name","lastName"],["Email","email"],["Phone","phone"],["Job Title","jobTitle"],["Department","department"]].map(([label,field]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input value={profile[field]} onChange={e => setProfile({...profile,[field]:e.target.value})} style={inputStyle} onFocus={e => e.target.style.borderColor="rgba(255,255,255,0.3)"} onBlur={e => e.target.style.borderColor="rgba(255,255,255,0.12)"}/>
                </div>
              ))}
            </div>
            <button onClick={saveProfile} style={{marginTop:"24px",background:"rgba(34,197,94,0.15)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"11px 28px",color:"#22c55e",cursor:"pointer",fontSize:"0.875rem",fontWeight:500}}>💾 Save Profile</button>
          </div>
        )}

        {tab === "security" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Security Settings</h2>
            {passError && <div style={{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:"10px",padding:"12px 16px",marginBottom:"16px",color:"#ef4444",fontSize:"0.875rem"}}>⚠ {passError}</div>}
            {passSaved && <div style={{background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"12px 16px",marginBottom:"16px",color:"#22c55e",fontSize:"0.875rem"}}>✅ Password changed!</div>}
            <div style={{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px"}}>
              {[["Current Password","current"],["New Password","newPass"],["Confirm New Password","confirm"]].map(([label,field]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input type="password" placeholder="••••••••" value={passwords[field]} onChange={e => {setPasswords({...passwords,[field]:e.target.value});setPassError("");}} style={inputStyle}/>
                </div>
              ))}
              <button onClick={savePassword} style={{background:"rgba(59,130,246,0.15)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:"10px",padding:"11px 24px",color:"#3b82f6",cursor:"pointer",fontSize:"0.875rem",fontWeight:500}}>🔒 Update Password</button>
            </div>
            <div style={{marginTop:"28px",padding:"20px",background:"rgba(245,158,11,0.05)",border:"1px solid rgba(245,158,11,0.15)",borderRadius:"12px",maxWidth:"400px"}}>
              <h3 style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"6px"}}>🛡 Two-Factor Authentication</h3>
              <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"12px"}}>Add an extra layer of security. Use an authenticator app to generate codes.</p>
              <button style={{fontSize:"0.8rem",background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.3)",borderRadius:"8px",padding:"8px 16px",color:"#f59e0b",cursor:"pointer"}}>Enable 2FA →</button>
            </div>
          </div>
        )}

        {tab === "notifications" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Notification Preferences</h2>
            <div style={{maxWidth:"520px",display:"flex",flexDirection:"column",gap:"6px"}}>
              {[["performance","🚨 Performance Alerts","Notified when employee performance drops significantly"],["reviews","📅 Review Reminders","Reminders for upcoming performance review deadlines"],["leave","📋 Leave Requests","New leave approval requests requiring action"],["attrition","🔮 Attrition Alerts","AI-detected high attrition risk warnings"],["reports","📊 Weekly Reports","Automated weekly HR summary reports"],["weekly","📧 Weekly Digest","Weekly team performance digest via email"],["email","📬 Email Notifications","Receive all notifications via email"],["sms","📱 SMS Alerts","Receive critical alerts via SMS"]].map(([key,title,desc]) => (
                <div key={key} onClick={() => setNotifications({...notifications,[key]:!notifications[key]})} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px",borderRadius:"12px",cursor:"pointer",background:notifications[key]?"rgba(255,255,255,0.04)":"transparent",border:"1px solid",borderColor:notifications[key]?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.04)",transition:"all 0.2s",marginBottom:"2px"}}>
                  <div style={{flex:1}}>
                    <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{title}</div>
                    <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{desc}</div>
                  </div>
                  <div style={{width:"44px",height:"24px",borderRadius:"12px",background:notifications[key]?"rgba(34,197,94,0.5)":"rgba(255,255,255,0.1)",position:"relative",transition:"all 0.3s",flexShrink:0,marginLeft:"16px"}}>
                    <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"white",position:"absolute",top:"3px",left:notifications[key]?"23px":"3px",transition:"all 0.3s",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}}/>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={saveNotifications} style={{marginTop:"20px",background:"rgba(34,197,94,0.15)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"11px 28px",color:"#22c55e",cursor:"pointer",fontSize:"0.875rem",fontWeight:500}}>💾 Save Preferences</button>
          </div>
        )}

        {tab === "appearance" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Appearance Settings</h2>
            <div style={{maxWidth:"480px"}}>
              <div style={{marginBottom:"24px"}}>
                <label style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"12px"}}>🌙 Color Theme</label>
                <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                  {[["dark","🌙 Dark Theme","Deep navy cinematic dark mode (Default)"],["light","☀️ Light Theme","Clean professional light mode"],["system","💻 System","Follow your device system preference"]].map(([val,label,desc]) => (
                    <div key={val} onClick={() => saveTheme(val)} style={{display:"flex",alignItems:"center",gap:"16px",padding:"16px",borderRadius:"12px",border:`2px solid ${theme===val?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.08)"}`,background:theme===val?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.01)",cursor:"pointer",transition:"all 0.2s"}}>
                      <div style={{width:"22px",height:"22px",borderRadius:"50%",border:`2px solid ${theme===val?"hsl(var(--foreground))":"rgba(255,255,255,0.2)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        {theme===val && <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"hsl(var(--foreground))"}}/>}
                      </div>
                      <div>
                        <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{label}</div>
                        <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{desc}</div>
                      </div>
                      {theme===val && <span style={{marginLeft:"auto",fontSize:"0.75rem",color:"#22c55e"}}>✓ Active</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"12px"}}>🔤 Font Size</label>
                <div style={{display:"flex",gap:"8px"}}>
                  {[["small","Small","text-sm"],["medium","Medium","text-base"],["large","Large","text-lg"]].map(([val,label]) => (
                    <button key={val} onClick={() => saveFontSize(val)} style={{flex:1,padding:"12px",borderRadius:"10px",border:`2px solid ${fontSize===val?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.08)"}`,background:fontSize===val?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.02)",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:val==="small"?"0.8rem":val==="large"?"1rem":"0.875rem",transition:"all 0.2s"}}>
                      {label}{fontSize===val&&" ✓"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "company" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Company Settings</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
              {[["Company Name","name"],["Industry","industry"],["Company Size","size"],["Timezone","timezone"],["Currency","currency"],["Fiscal Year","fiscal"],["Address","address"]].map(([label,field]) => (
                <div key={field} style={{gridColumn:field==="address"?"1/-1":"auto"}}>
                  <label style={labelStyle}>{label}</label>
                  <input value={company[field]} onChange={e => setCompany({...company,[field]:e.target.value})} style={inputStyle}/>
                </div>
              ))}
            </div>
            <button onClick={saveCompany} style={{marginTop:"24px",background:"rgba(34,197,94,0.15)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"11px 28px",color:"#22c55e",cursor:"pointer",fontSize:"0.875rem",fontWeight:500}}>💾 Save Company Settings</button>
          </div>
        )}
      </div>
    </div>
  );
}
