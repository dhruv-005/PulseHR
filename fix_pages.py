import os

base = os.path.expanduser("~/Music/pulseHR/client/src/app/(dashboard)")

pages = {}

pages["employees/page.tsx"] = '''"use client";
import { useState } from "react";
import Link from "next/link";

const employees = [
  {id:"1",name:"Arjun Patel",role:"Senior Developer",dept:"Engineering",status:"active",score:82,risk:87,salary:"₹18L",joined:"2021-03-15",email:"arjun@company.com"},
  {id:"2",name:"Priya Singh",role:"UX Designer",dept:"Design",status:"active",score:78,risk:74,salary:"₹14L",joined:"2020-07-22",email:"priya@company.com"},
  {id:"3",name:"Rohit Kumar",role:"Data Analyst",dept:"Analytics",status:"active",score:91,risk:32,salary:"₹16L",joined:"2019-11-10",email:"rohit@company.com"},
  {id:"4",name:"Sneha Verma",role:"Product Manager",dept:"Product",status:"on_leave",score:88,risk:45,salary:"₹22L",joined:"2022-01-05",email:"sneha@company.com"},
  {id:"5",name:"Dev Sharma",role:"Backend Dev",dept:"Engineering",status:"active",score:76,risk:58,salary:"₹15L",joined:"2021-08-19",email:"dev@company.com"},
  {id:"6",name:"Anjali Rao",role:"Engineering Lead",dept:"Engineering",status:"active",score:94,risk:22,salary:"₹28L",joined:"2018-04-30",email:"anjali@company.com"},
  {id:"7",name:"Meera Nair",role:"Data Scientist",dept:"Analytics",status:"active",score:87,risk:41,salary:"₹20L",joined:"2020-09-14",email:"meera@company.com"},
  {id:"8",name:"Karan Mehta",role:"Sales Executive",dept:"Sales",status:"inactive",score:65,risk:78,salary:"₹12L",joined:"2023-02-28",email:"karan@company.com"},
];

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");
  const [status, setStatus] = useState("all");
  const depts = ["all", ...Array.from(new Set(employees.map(e => e.dept)))];
  const filtered = employees.filter(e =>
    (dept === "all" || e.dept === dept) &&
    (status === "all" || e.status === status) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.role.toLowerCase().includes(search.toLowerCase()) ||
     e.email.toLowerCase().includes(search.toLowerCase()))
  );
  const statusColor = {active:"bg-green-500/10 text-green-400",on_leave:"bg-yellow-500/10 text-yellow-400",inactive:"bg-red-500/10 text-red-400"};
  const riskColor = (r) => r >= 75 ? "bg-red-500/10 text-red-400" : r >= 50 ? "bg-yellow-500/10 text-yellow-400" : "bg-green-500/10 text-green-400";
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Employees</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>{filtered.length} of {employees.length} employees</p>
        </div>
        <Link href="/employees/new" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"10px 20px",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"0.875rem"}}>+ Add Employee</Link>
      </div>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, role, email..." style={{flex:1,minWidth:"200px",background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}/>
        <select value={dept} onChange={e => setDept(e.target.value)} style={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
          {depts.map(d => <option key={d} value={d} style={{background:"hsl(var(--card))"}}>{d === "all" ? "All Departments" : d}</option>)}
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} style={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
          {["all","active","on_leave","inactive"].map(s => <option key={s} value={s} style={{background:"hsl(var(--card))"}}>{s === "all" ? "All Status" : s.replace("_"," ")}</option>)}
        </select>
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead>
            <tr style={{borderBottom:"1px solid hsl(var(--border))"}}>
              {["Employee","Department","Status","Performance","Attrition Risk","Salary","Joined","Action"].map(h => (
                <th key={h} style={{textAlign:"left",padding:"16px 20px",fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",fontWeight:500}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <tr key={emp.id} style={{borderBottom:"1px solid hsl(var(--border))"}} onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.02)"} onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                <td style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",color:"hsl(var(--foreground))",fontWeight:600}}>
                      {emp.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{emp.name}</div>
                      <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <div style={{fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{emp.dept}</div>
                  <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.role}</div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px"}} className={statusColor[emp.status]}>{emp.status.replace("_"," ")}</span>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"60px",height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"}}>
                      <div style={{width:`${emp.score}%`,height:"100%",background:"rgba(255,255,255,0.6)",borderRadius:"3px"}}/>
                    </div>
                    <span style={{fontSize:"0.75rem",color:"hsl(var(--foreground))"}}>{emp.score}%</span>
                  </div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px"}} className={riskColor(emp.risk)}>{emp.risk}%</span>
                </td>
                <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{emp.salary}</td>
                <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{emp.joined}</td>
                <td style={{padding:"16px 20px"}}>
                  <Link href={`/employees/${emp.id}`} style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",textDecoration:"none"}}>View →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div style={{textAlign:"center",padding:"48px",color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>No employees found matching your search.</div>}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {[
          {label:"Total Employees",value:employees.length,color:"#3b82f6"},
          {label:"Active",value:employees.filter(e=>e.status==="active").length,color:"#22c55e"},
          {label:"On Leave",value:employees.filter(e=>e.status==="on_leave").length,color:"#f59e0b"},
          {label:"High Risk",value:employees.filter(e=>e.risk>=75).length,color:"#ef4444"},
        ].map(stat => (
          <div key={stat.label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color:stat.color}}>{stat.value}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
'''

pages["settings/page.tsx"] = '''"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [tab, setTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({firstName:"John",lastName:"Doe",email:"admin@pulseHR.com",phone:"+91 9876543210",jobTitle:"Super Admin",department:"HR"});
  const [passwords, setPasswords] = useState({current:"",newPass:"",confirm:""});
  const [notifications, setNotifications] = useState({performance:true,reviews:true,leave:true,attrition:true,reports:false,weekly:false});
  const [theme, setTheme] = useState("dark");
  const tabs = [{id:"profile",label:"Profile"},{id:"security",label:"Security"},{id:"notifications",label:"Notifications"},{id:"appearance",label:"Appearance"},{id:"company",label:"Company"}];
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const inputStyle = {width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem",boxSizing:"border-box" as const};
  const labelStyle = {fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"8px"};
  return (
    <div style={{maxWidth:"900px"}}>
      <div style={{marginBottom:"24px"}}>
        <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Settings</h1>
        <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Manage your account preferences</p>
      </div>
      <div style={{display:"flex",gap:"8px",borderBottom:"1px solid hsl(var(--border))",marginBottom:"24px",flexWrap:"wrap"}}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{padding:"10px 20px",fontSize:"0.875rem",border:"none",borderBottom: tab===t.id?"2px solid hsl(var(--foreground))":"2px solid transparent",background:"transparent",color: tab===t.id?"hsl(var(--foreground))":"hsl(var(--muted-foreground))",cursor:"pointer",marginBottom:"-1px",transition:"all 0.2s"}}>{t.label}</button>
        ))}
      </div>
      {saved && <div style={{background:"rgba(34,197,94,0.1)",border:"1px solid rgba(34,197,94,0.3)",borderRadius:"10px",padding:"12px 20px",marginBottom:"20px",color:"#22c55e",fontSize:"0.875rem"}}>✅ Settings saved successfully!</div>}
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"32px"}}>
        {tab === "profile" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Profile Information</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
              {[["First Name","firstName"],["Last Name","lastName"],["Email","email"],["Phone","phone"],["Job Title","jobTitle"],["Department","department"]].map(([label,field]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input value={profile[field]} onChange={e => setProfile({...profile,[field]:e.target.value})} style={inputStyle}/>
                </div>
              ))}
            </div>
            <button onClick={handleSave} style={{marginTop:"24px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Save Profile</button>
          </div>
        )}
        {tab === "security" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Security Settings</h2>
            <div style={{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px"}}>
              {[["Current Password","current"],["New Password","newPass"],["Confirm Password","confirm"]].map(([label,field]) => (
                <div key={field}>
                  <label style={labelStyle}>{label}</label>
                  <input type="password" placeholder="••••••••" value={passwords[field]} onChange={e => setPasswords({...passwords,[field]:e.target.value})} style={inputStyle}/>
                </div>
              ))}
              <button onClick={handleSave} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Update Password</button>
            </div>
            <div style={{marginTop:"32px",padding:"20px",background:"rgba(59,130,246,0.05)",border:"1px solid rgba(59,130,246,0.2)",borderRadius:"12px",maxWidth:"400px"}}>
              <h3 style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"8px"}}>Two-Factor Authentication</h3>
              <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"12px"}}>Add an extra layer of security to your account</p>
              <button style={{fontSize:"0.75rem",background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.3)",borderRadius:"8px",padding:"8px 16px",color:"#3b82f6",cursor:"pointer"}}>Enable 2FA</button>
            </div>
          </div>
        )}
        {tab === "notifications" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Notification Preferences</h2>
            <div style={{maxWidth:"500px",display:"flex",flexDirection:"column",gap:"4px"}}>
              {[["performance","Performance Alerts","Get notified when performance drops"],["reviews","Review Reminders","Upcoming review deadlines"],["leave","Leave Requests","New leave approval requests"],["attrition","Attrition Alerts","High risk employee warnings"],["reports","Weekly Reports","Weekly HR summary"],["weekly","Weekly Digest","Weekly team performance digest"]].map(([key,title,desc]) => (
                <div key={key} onClick={() => setNotifications({...notifications,[key]:!notifications[key]})} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px",borderRadius:"10px",cursor:"pointer",background:notifications[key]?"rgba(255,255,255,0.03)":"transparent",border:"1px solid",borderColor:notifications[key]?"rgba(255,255,255,0.08)":"transparent",transition:"all 0.2s"}}>
                  <div>
                    <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{title}</div>
                    <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{desc}</div>
                  </div>
                  <div style={{width:"44px",height:"24px",borderRadius:"12px",background:notifications[key]?"rgba(34,197,94,0.5)":"rgba(255,255,255,0.1)",position:"relative",transition:"all 0.2s",flexShrink:0}}>
                    <div style={{width:"18px",height:"18px",borderRadius:"50%",background:"white",position:"absolute",top:"3px",left:notifications[key]?"23px":"3px",transition:"all 0.2s"}}/>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleSave} style={{marginTop:"24px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Save Preferences</button>
          </div>
        )}
        {tab === "appearance" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Appearance</h2>
            <div style={{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"12px"}}>
              {[["dark","Dark Theme","Deep navy cinematic dark mode"],["light","Light Theme","Clean professional light mode"],["system","System","Follow system preference"]].map(([val,label,desc]) => (
                <div key={val} onClick={() => setTheme(val)} style={{display:"flex",alignItems:"center",gap:"16px",padding:"16px",borderRadius:"12px",border:`1px solid ${theme===val?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.08)"}`,background:theme===val?"rgba(255,255,255,0.05)":"transparent",cursor:"pointer",transition:"all 0.2s"}}>
                  <div style={{width:"20px",height:"20px",borderRadius:"50%",border:`2px solid ${theme===val?"hsl(var(--foreground))":"hsl(var(--border))"}`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    {theme===val && <div style={{width:"10px",height:"10px",borderRadius:"50%",background:"hsl(var(--foreground))"}}/>}
                  </div>
                  <div>
                    <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{label}</div>
                    <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === "company" && (
          <div>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"24px"}}>Company Settings</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
              {[["Company Name","Acme Corporation"],["Industry","Technology"],["Company Size","1000-5000"],["Timezone","Asia/Kolkata"],["Currency","INR"],["Fiscal Year","April - March"]].map(([label,val]) => (
                <div key={label}>
                  <label style={labelStyle}>{label}</label>
                  <input defaultValue={val} style={inputStyle}/>
                </div>
              ))}
            </div>
            <button onClick={handleSave} style={{marginTop:"24px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Save Company Settings</button>
          </div>
        )}
      </div>
    </div>
  );
}
'''

pages["departments/page.tsx"] = '''"use client";
import { useState } from "react";

const departments = [
  {id:"1",name:"Engineering",head:"Anjali Rao",employees:234,avgScore:82,budget:"₹2.4Cr",spent:"₹2.0Cr",openRoles:8,color:"#3b82f6"},
  {id:"2",name:"Product",head:"Sneha Verma",employees:45,avgScore:78,budget:"₹80L",spent:"₹68L",openRoles:3,color:"#8b5cf6"},
  {id:"3",name:"Design",head:"Priya Singh",employees:28,avgScore:84,budget:"₹50L",spent:"₹40L",openRoles:2,color:"#ec4899"},
  {id:"4",name:"Sales",head:"Karan Mehta",employees:189,avgScore:91,budget:"₹1.8Cr",spent:"₹1.6Cr",openRoles:12,color:"#22c55e"},
  {id:"5",name:"HR",head:"Dev Sharma",employees:32,avgScore:79,budget:"₹60L",spent:"₹45L",openRoles:1,color:"#f59e0b"},
  {id:"6",name:"Finance",head:"Rohit Kumar",employees:41,avgScore:88,budget:"₹70L",spent:"₹58L",openRoles:2,color:"#14b8a6"},
  {id:"7",name:"Marketing",head:"Meera Nair",employees:56,avgScore:76,budget:"₹90L",spent:"₹72L",openRoles:4,color:"#f97316"},
  {id:"8",name:"Operations",head:"Arjun Patel",employees:98,avgScore:83,budget:"₹1.2Cr",spent:"₹1.0Cr",openRoles:6,color:"#06b6d4"},
];

export default function DepartmentsPage() {
  const [selected, setSelected] = useState(null);
  const dept = selected ? departments.find(d => d.id === selected) : null;
  return (
    <div style={{display:"grid",gridTemplateColumns:selected?"1fr 1fr":"1fr",gap:"24px"}}>
      <div>
        <div style={{marginBottom:"24px"}}>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Departments</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>{departments.length} departments · {departments.reduce((a,d)=>a+d.employees,0)} total employees</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"16px"}}>
          {departments.map(d => (
            <div key={d.id} onClick={() => setSelected(selected===d.id?null:d.id)} style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${selected===d.id?d.color+"66":"rgba(255,255,255,0.08)"}`,borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.2s",transform:selected===d.id?"scale(1.02)":"scale(1)"}}>
              <div style={{width:"40px",height:"40px",borderRadius:"12px",background:d.color+"20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem",marginBottom:"16px"}}>🏢</div>
              <h3 style={{fontSize:"1rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))",marginBottom:"4px"}}>{d.name}</h3>
              <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"16px"}}>Head: {d.head}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                {[["👥 Team",d.employees],["📊 Score",d.avgScore+"%"],["💼 Budget",d.budget],["🔓 Open",d.openRoles+" roles"]].map(([label,val]) => (
                  <div key={label} style={{background:"rgba(255,255,255,0.03)",borderRadius:"8px",padding:"8px"}}>
                    <div style={{fontSize:"0.65rem",color:"hsl(var(--muted-foreground))"}}>{ label}</div>
                    <div style={{fontSize:"0.875rem",fontWeight:600,color:"hsl(var(--foreground))",marginTop:"2px"}}>{val}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:"12px"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
                  <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Performance</span>
                  <span style={{fontSize:"0.7rem",color:"hsl(var(--foreground))"}}>{d.avgScore}%</span>
                </div>
                <div style={{width:"100%",height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"}}>
                  <div style={{width:`${d.avgScore}%`,height:"100%",background:d.color,borderRadius:"2px"}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {dept && (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"32px",height:"fit-content",position:"sticky",top:"80px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"24px"}}>
            <div>
              <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.5rem",color:"hsl(var(--foreground))"}}>{dept.name}</h2>
              <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>Department Details</p>
            </div>
            <button onClick={() => setSelected(null)} style={{background:"transparent",border:"none",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"1.25rem"}}>×</button>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {[["Department Head",dept.head],["Total Employees",dept.employees],["Average Performance",dept.avgScore+"%"],["Budget Allocated",dept.budget],["Budget Spent",dept.spent],["Open Roles",dept.openRoles]].map(([label,val]) => (
              <div key={label} style={{display:"flex",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                <span style={{fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{label}</span>
                <span style={{fontSize:"0.875rem",fontWeight:600,color:"hsl(var(--foreground))"}}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:"24px",display:"flex",gap:"8px"}}>
            <button style={{flex:1,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.8rem"}}>View Employees</button>
            <button style={{flex:1,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"10px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.8rem"}}>Analytics</button>
          </div>
        </div>
      )}
    </div>
  );
}
'''

pages["performance/page.tsx"] = '''"use client";
import Link from "next/link";

const stats = [
  {label:"Avg Score",value:"78.4%",change:"+2.3%",color:"#22c55e"},
  {label:"Reviews Done",value:"156",change:"24 pending",color:"#3b82f6"},
  {label:"Goals Active",value:"342",change:"89% on track",color:"#8b5cf6"},
  {label:"Top Performers",value:"48",change:"this quarter",color:"#f59e0b"},
];

const recentReviews = [
  {name:"Arjun Patel",role:"Senior Developer",score:82,status:"completed",period:"Q4 2024",trend:"up"},
  {name:"Priya Singh",role:"UX Designer",score:78,status:"in_progress",period:"Q4 2024",trend:"stable"},
  {name:"Rohit Kumar",role:"Data Analyst",score:91,status:"completed",period:"Q4 2024",trend:"up"},
  {name:"Sneha Verma",role:"Product Manager",score:88,status:"pending",period:"Q4 2024",trend:"up"},
  {name:"Dev Sharma",role:"Backend Dev",score:76,status:"in_progress",period:"Q4 2024",trend:"down"},
];

const deptPerformance = [
  {dept:"Sales",score:91,color:"#22c55e"},
  {dept:"Finance",score:88,color:"#3b82f6"},
  {dept:"Engineering",score:82,color:"#8b5cf6"},
  {dept:"Design",score:84,color:"#ec4899"},
  {dept:"Product",score:78,color:"#f59e0b"},
  {dept:"HR",score:75,color:"#14b8a6"},
];

export default function PerformancePage() {
  const statusColor = {completed:"#22c55e",in_progress:"#f59e0b",pending:"#6b7280"};
  const statusBg = {completed:"rgba(34,197,94,0.1)",in_progress:"rgba(245,158,11,0.1)",pending:"rgba(107,114,128,0.1)"};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Performance</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Q4 2024 performance overview</p>
        </div>
        <div style={{display:"flex",gap:"8px"}}>
          <Link href="/performance/reviews" style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"0.875rem"}}>Reviews</Link>
          <Link href="/performance/goals" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"0.875rem"}}>Goals</Link>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {stats.map(s => (
          <div key={s.label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
            <div style={{fontSize:"1.75rem",fontFamily:"Instrument Serif,serif",color:s.color}}>{s.value}</div>
            <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))",marginTop:"4px"}}>{s.label}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{s.change}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"24px"}}>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))"}}>Recent Reviews</h2>
            <Link href="/performance/reviews" style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",textDecoration:"none"}}>View all →</Link>
          </div>
          {recentReviews.map(r => (
            <div key={r.name} style={{display:"flex",alignItems:"center",gap:"16px",padding:"14px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600,color:"hsl(var(--foreground))",flexShrink:0}}>
                {r.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{r.name}</div>
                <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{r.role} · {r.period}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <div>
                  <div style={{width:"60px",height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"}}>
                    <div style={{width:`${r.score}%`,height:"100%",background:"rgba(255,255,255,0.5)",borderRadius:"2px"}}/>
                  </div>
                  <div style={{fontSize:"0.7rem",color:"hsl(var(--foreground))",textAlign:"right",marginTop:"2px"}}>{r.score}%</div>
                </div>
                <span style={{fontSize:"0.7rem",padding:"3px 8px",borderRadius:"999px",background:statusBg[r.status],color:statusColor[r.status]}}>{r.status.replace("_"," ")}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>By Department</h2>
          {deptPerformance.map(d => (
            <div key={d.dept} style={{marginBottom:"14px"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
                <span style={{fontSize:"0.8rem",color:"hsl(var(--foreground))"}}>{d.dept}</span>
                <span style={{fontSize:"0.8rem",fontWeight:600,color:d.color}}>{d.score}%</span>
              </div>
              <div style={{width:"100%",height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px",overflow:"hidden"}}>
                <div style={{width:`${d.score}%`,height:"100%",background:d.color,borderRadius:"3px",transition:"width 0.5s"}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'''

pages["performance/reviews/page.tsx"] = '''"use client";
import { useState } from "react";

const reviews = [
  {id:"1",employee:"Arjun Patel",role:"Senior Developer",dept:"Engineering",period:"Q4 2024",score:82,status:"completed",reviewer:"Anjali Rao",date:"2024-12-10",technical:85,communication:78,teamwork:88,leadership:80},
  {id:"2",employee:"Priya Singh",role:"UX Designer",dept:"Design",period:"Q4 2024",score:78,status:"in_progress",reviewer:"HR Manager",date:"2024-12-15",technical:80,communication:82,teamwork:75,leadership:0},
  {id:"3",employee:"Rohit Kumar",role:"Data Analyst",dept:"Analytics",period:"Q4 2024",score:91,status:"completed",reviewer:"Dept Head",date:"2024-12-05",technical:95,communication:88,teamwork:90,leadership:85},
  {id:"4",employee:"Sneha Verma",role:"Product Manager",dept:"Product",period:"Q4 2024",score:0,status:"pending",reviewer:"HR Manager",date:"2024-12-20",technical:0,communication:0,teamwork:0,leadership:0},
  {id:"5",employee:"Dev Sharma",role:"Backend Dev",dept:"Engineering",period:"Q4 2024",score:76,status:"in_progress",reviewer:"Team Lead",date:"2024-12-18",technical:80,communication:70,teamwork:78,leadership:0},
  {id:"6",employee:"Anjali Rao",role:"Engineering Lead",dept:"Engineering",period:"Q4 2024",score:94,status:"completed",reviewer:"HR Manager",date:"2024-12-08",technical:96,communication:92,teamwork:95,leadership:94},
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const filtered = filter === "all" ? reviews : reviews.filter(r => r.status === filter);
  const review = selected ? reviews.find(r => r.id === selected) : null;
  const statusColor = {completed:"#22c55e",in_progress:"#f59e0b",pending:"#6b7280",approved:"#3b82f6"};
  const statusBg = {completed:"rgba(34,197,94,0.1)",in_progress:"rgba(245,158,11,0.1)",pending:"rgba(107,114,128,0.1)",approved:"rgba(59,130,246,0.1)"};
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Performance Reviews</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>{reviews.length} reviews this cycle</p>
        </div>
        <button style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>+ New Review</button>
      </div>
      <div style={{display:"flex",gap:"8px",marginBottom:"20px",flexWrap:"wrap"}}>
        {["all","pending","in_progress","completed"].map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{padding:"8px 16px",fontSize:"0.8rem",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"capitalize",background:filter===s?"hsl(var(--foreground))":"rgba(255,255,255,0.05)",color:filter===s?"hsl(var(--background))":"hsl(var(--muted-foreground))",transition:"all 0.2s"}}>{s.replace("_"," ")}</button>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:selected?"1fr 1fr":"1fr",gap:"24px"}}>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
                {["Employee","Period","Score","Status","Reviewer","Due Date"].map(h => (
                  <th key={h} style={{textAlign:"left",padding:"16px 20px",fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",fontWeight:500}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id} onClick={() => setSelected(selected===r.id?null:r.id)} style={{borderBottom:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",background:selected===r.id?"rgba(255,255,255,0.05)":"transparent",transition:"background 0.2s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"} onMouseLeave={e=>e.currentTarget.style.background=selected===r.id?"rgba(255,255,255,0.05)":"transparent"}>
                  <td style={{padding:"16px 20px"}}>
                    <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{r.employee}</div>
                    <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{r.role}</div>
                  </td>
                  <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{r.period}</td>
                  <td style={{padding:"16px 20px"}}>
                    {r.score > 0 ? (
                      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <div style={{width:"50px",height:"4px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden"}}>
                          <div style={{width:`${r.score}%`,height:"100%",background:"rgba(255,255,255,0.5)",borderRadius:"2px"}}/>
                        </div>
                        <span style={{fontSize:"0.8rem",color:"hsl(var(--foreground))"}}>{r.score}%</span>
                      </div>
                    ) : <span style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>—</span>}
                  </td>
                  <td style={{padding:"16px 20px"}}>
                    <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px",background:statusBg[r.status],color:statusColor[r.status]}}>{r.status.replace("_"," ")}</span>
                  </td>
                  <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{r.reviewer}</td>
                  <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {review && (
          <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px",height:"fit-content"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
              <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))"}}>{review.employee}</h2>
              <button onClick={() => setSelected(null)} style={{background:"transparent",border:"none",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"1.25rem"}}>×</button>
            </div>
            <div style={{display:"flex",gap:"8px",marginBottom:"20px"}}>
              <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px",background:statusBg[review.status],color:statusColor[review.status]}}>{review.status.replace("_"," ")}</span>
              <span style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{review.period}</span>
            </div>
            {review.score > 0 && (
              <div>
                <div style={{textAlign:"center",marginBottom:"20px",padding:"20px",background:"rgba(255,255,255,0.03)",borderRadius:"12px"}}>
                  <div style={{fontSize:"3rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{review.score}%</div>
                  <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>Overall Score</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                  {[["Technical Skills",review.technical],["Communication",review.communication],["Teamwork",review.teamwork],["Leadership",review.leadership]].filter(([,v])=>v>0).map(([label,val]) => (
                    <div key={label}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"4px"}}>
                        <span style={{fontSize:"0.8rem",color:"hsl(var(--foreground))"}}>{label}</span>
                        <span style={{fontSize:"0.8rem",fontWeight:600,color:"hsl(var(--foreground))"}}>{val}%</span>
                      </div>
                      <div style={{width:"100%",height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px",overflow:"hidden"}}>
                        <div style={{width:`${val}%`,height:"100%",background:"rgba(255,255,255,0.5)",borderRadius:"3px"}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {review.status === "pending" && (
              <button style={{width:"100%",marginTop:"20px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"12px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Start Review</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
'''

pages["performance/goals/page.tsx"] = '''"use client";
import { useState } from "react";

const goals = [
  {id:"1",title:"Increase team velocity by 20%",owner:"Engineering Team",category:"team",status:"on_track",progress:75,due:"2024-12-31",description:"Improve sprint completion rate and reduce blockers"},
  {id:"2",title:"Complete AWS Solutions Architect certification",owner:"Arjun Patel",category:"individual",status:"on_track",progress:60,due:"2024-12-20",description:"Pass the AWS SAA-C03 exam"},
  {id:"3",title:"Reduce customer churn to under 5%",owner:"Sales Team",category:"department",status:"at_risk",progress:40,due:"2024-12-31",description:"Implement retention strategies and improve onboarding"},
  {id:"4",title:"Launch mobile app version 2.0",owner:"Product Team",category:"company",status:"behind",progress:25,due:"2024-12-15",description:"Complete all P0 features and pass QA"},
  {id:"5",title:"Hire 10 senior engineers",owner:"HR Team",category:"department",status:"completed",progress:100,due:"2024-11-30",description:"Expand engineering team for Q1 roadmap"},
  {id:"6",title:"Achieve NPS score of 70+",owner:"Customer Success",category:"company",status:"on_track",progress:80,due:"2024-12-31",description:"Improve customer satisfaction through proactive support"},
];

export default function GoalsPage() {
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const filtered = filter === "all" ? goals : goals.filter(g => g.status === filter);
  const statusConfig = {on_track:{color:"#22c55e",bg:"rgba(34,197,94,0.1)",label:"On Track"},at_risk:{color:"#f59e0b",bg:"rgba(245,158,11,0.1)",label:"At Risk"},behind:{color:"#ef4444",bg:"rgba(239,68,68,0.1)",label:"Behind"},completed:{color:"#3b82f6",bg:"rgba(59,130,246,0.1)",label:"Completed"},cancelled:{color:"#6b7280",bg:"rgba(107,114,128,0.1)",label:"Cancelled"}};
  const catConfig = {individual:{color:"#8b5cf6",bg:"rgba(139,92,246,0.1)"},team:{color:"#3b82f6",bg:"rgba(59,130,246,0.1)"},department:{color:"#14b8a6",bg:"rgba(20,184,166,0.1)"},company:{color:"#f97316",bg:"rgba(249,115,22,0.1)"}};
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"24px",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Goals & OKRs</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Track objectives and key results</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>+ New Goal</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"12px",marginBottom:"24px"}}>
        {[["all","All",goals.length,"rgba(255,255,255,0.1)"],["on_track","On Track",goals.filter(g=>g.status==="on_track").length,"rgba(34,197,94,0.1)"],["at_risk","At Risk",goals.filter(g=>g.status==="at_risk").length,"rgba(245,158,11,0.1)"],["behind","Behind",goals.filter(g=>g.status==="behind").length,"rgba(239,68,68,0.1)"],["completed","Done",goals.filter(g=>g.status==="completed").length,"rgba(59,130,246,0.1)"]].map(([val,label,count,bg]) => (
          <button key={val} onClick={() => setFilter(val)} style={{padding:"14px",borderRadius:"12px",border:`1px solid ${filter===val?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.08)"}`,background:filter===val?bg:"rgba(255,255,255,0.02)",cursor:"pointer",textAlign:"center",transition:"all 0.2s"}}>
            <div style={{fontSize:"1.5rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{count}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{label}</div>
          </button>
        ))}
      </div>
      {showForm && (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px",marginBottom:"24px"}}>
          <h3 style={{fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Create New Goal</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
            {[["Goal Title","text","e.g. Increase revenue by 20%"],["Owner","text","Team or person name"],["Due Date","date",""],["Category","select",""]].map(([label,type,ph]) => (
              <div key={label}>
                <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>{label}</label>
                {type === "select" ? (
                  <select style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
                    {["individual","team","department","company"].map(c => <option key={c} style={{background:"hsl(var(--card))"}}>{c}</option>)}
                  </select>
                ) : (
                  <input type={type} placeholder={ph} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem",boxSizing:"border-box" as const}}/>
                )}
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"8px",marginTop:"16px"}}>
            <button onClick={() => setShowForm(false)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",padding:"8px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Create Goal</button>
            <button onClick={() => setShowForm(false)} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"8px 20px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Cancel</button>
          </div>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
        {filtered.map(goal => {
          const sc = statusConfig[goal.status];
          const cc = catConfig[goal.category];
          return (
            <div key={goal.id} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",transition:"transform 0.2s"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.005)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"12px"}}>
                <div style={{flex:1}}>
                  <h3 style={{fontSize:"0.95rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"4px"}}>{goal.title}</h3>
                  <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{goal.owner} · Due {goal.due}</p>
                  <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px",fontStyle:"italic"}}>{goal.description}</p>
                </div>
                <div style={{display:"flex",gap:"8px",marginLeft:"16px",flexShrink:0}}>
                  <span style={{fontSize:"0.7rem",padding:"4px 10px",borderRadius:"999px",background:cc.bg,color:cc.color}}>{goal.category}</span>
                  <span style={{fontSize:"0.7rem",padding:"4px 10px",borderRadius:"999px",background:sc.bg,color:sc.color}}>{sc.label}</span>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <div style={{flex:1,height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
                  <div style={{width:`${goal.progress}%`,height:"100%",background:sc.color,borderRadius:"4px",transition:"width 0.5s"}}/>
                </div>
                <span style={{fontSize:"0.8rem",fontWeight:600,color:sc.color,minWidth:"36px",textAlign:"right"}}>{goal.progress}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
'''

pages["analytics/page.tsx"] = '''"use client";

const deptData = [
  {dept:"Sales",score:91,employees:189},
  {dept:"Finance",score:88,employees:41},
  {dept:"Design",score:84,employees:28},
  {dept:"Engineering",score:82,employees:234},
  {dept:"Product",score:78,employees:45},
  {dept:"HR",score:79,employees:32},
  {dept:"Marketing",score:76,employees:56},
];

const monthlyTrend = [
  {month:"Jul",score:72,hires:12,exits:3},
  {month:"Aug",score:74,hires:8,exits:5},
  {month:"Sep",score:74,hires:15,exits:4},
  {month:"Oct",score:78,hires:10,exits:2},
  {month:"Nov",score:80,hires:18,exits:6},
  {month:"Dec",score:82,hires:14,exits:4},
];

export default function AnalyticsPage() {
  const maxScore = Math.max(...deptData.map(d=>d.score));
  const maxHires = Math.max(...monthlyTrend.map(m=>m.hires));
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div>
        <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Analytics</h1>
        <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Deep workforce intelligence and insights</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {[["2,847","Total Headcount","👥","#3b82f6"],["78.4%","Avg Performance","📊","#22c55e"],["87%","Retention Rate","🎯","#8b5cf6"],["23 days","Avg Time to Hire","⏱️","#f59e0b"]].map(([val,label,icon,color]) => (
          <div key={label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
            <div style={{fontSize:"1.5rem",marginBottom:"8px"}}>{icon}</div>
            <div style={{fontSize:"1.75rem",fontFamily:"Instrument Serif,serif",color}}>{val}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Department Performance</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {deptData.map(d => (
              <div key={d.dept}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}>
                  <div>
                    <span style={{fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{d.dept}</span>
                    <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginLeft:"8px"}}>{d.employees} employees</span>
                  </div>
                  <span style={{fontSize:"0.875rem",fontWeight:600,color:d.score>=85?"#22c55e":d.score>=75?"#f59e0b":"#ef4444"}}>{d.score}%</span>
                </div>
                <div style={{width:"100%",height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
                  <div style={{width:`${(d.score/maxScore)*100}%`,height:"100%",background:d.score>=85?"#22c55e":d.score>=75?"#f59e0b":"#ef4444",borderRadius:"4px"}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Monthly Hiring Trend</h2>
          <div style={{display:"flex",alignItems:"end",gap:"12px",height:"180px",paddingBottom:"8px"}}>
            {monthlyTrend.map(m => (
              <div key={m.month} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"}}>
                <div style={{width:"100%",display:"flex",gap:"3px",alignItems:"end",height:"140px"}}>
                  <div style={{flex:1,background:"rgba(59,130,246,0.5)",borderRadius:"4px 4px 0 0",height:`${(m.hires/maxHires)*100}%`,transition:"height 0.5s"}}/>
                  <div style={{flex:1,background:"rgba(239,68,68,0.4)",borderRadius:"4px 4px 0 0",height:`${(m.exits/maxHires)*60}%`,transition:"height 0.5s"}}/>
                </div>
                <span style={{fontSize:"0.65rem",color:"hsl(var(--muted-foreground))"}}>{m.month}</span>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"16px",marginTop:"8px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"6px"}}><div style={{width:"10px",height:"10px",borderRadius:"2px",background:"rgba(59,130,246,0.5)"}}/><span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Hires</span></div>
            <div style={{display:"flex",alignItems:"center",gap:"6px"}}><div style={{width:"10px",height:"10px",borderRadius:"2px",background:"rgba(239,68,68,0.4)"}}/><span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Exits</span></div>
          </div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {[["Attrition Risk","High: 143 employees","Medium: 287 employees","Low: 2,417 employees"],["Leave Analytics","Annual: 1,240 days taken","Sick: 380 days taken","Pending: 28 requests"],["Performance Distribution","Excellent (90+): 15%","Good (75-90): 48%","Average (60-75): 28%"]].map(([title,...items]) => (
          <div key={title} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
            <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"16px"}}>{title}</h3>
            {items.map((item,i) => (
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:i<items.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <span style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{item.split(":")[0]}</span>
                <span style={{fontSize:"0.8rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{item.split(":")[1]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
'''

pages["ai-insights/page.tsx"] = '''"use client";
import Link from "next/link";

const riskEmployees = [
  {name:"Arjun Patel",dept:"Engineering",risk:87,level:"high",reason:"No promotion + below market salary",action:"Salary review + career path discussion"},
  {name:"Karan Mehta",dept:"Sales",risk:78,level:"high",reason:"Missed targets 3 months + team conflict",action:"PIP + team mediation"},
  {name:"Priya Singh",dept:"Design",risk:74,level:"high",reason:"Market salary gap + high overtime",action:"Compensation adjustment"},
  {name:"Dev Sharma",dept:"Engineering",risk:62,level:"medium",reason:"Role mismatch + poor WLB",action:"Career counseling"},
  {name:"Sneha Verma",dept:"Product",risk:58,level:"medium",reason:"Relocation request pending",action:"Remote work discussion"},
  {name:"Meera Nair",dept:"Analytics",risk:41,level:"low",reason:"Low learning opportunities",action:"Enroll in upskilling"},
];

const skillGaps = [
  {skill:"Cloud Architecture",dept:"Engineering",affected:23,priority:"high"},
  {skill:"Kubernetes/DevOps",dept:"Engineering",affected:18,priority:"high"},
  {skill:"Data Analytics",dept:"Product",affected:8,priority:"medium"},
  {skill:"Enterprise Sales",dept:"Sales",affected:34,priority:"medium"},
];

export default function AIInsightsPage() {
  const levelColor = {high:"#ef4444",medium:"#f59e0b",low:"#22c55e"};
  const levelBg = {high:"rgba(239,68,68,0.1)",medium:"rgba(245,158,11,0.1)",low:"rgba(34,197,94,0.1)"};
  const priorityColor = {high:"#ef4444",medium:"#f59e0b",low:"#22c55e"};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div>
        <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>AI Insights</h1>
        <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Machine learning powered workforce intelligence</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {[["🔮 Attrition Risk","143 employees at high risk","View Report →","/ai-insights/attrition","rgba(239,68,68,0.1)"],["🧠 Skill Gaps","5 critical gaps identified","Analyze →","/ai-insights/skill-gap","rgba(59,130,246,0.1)"],["📈 Performance AI","89% prediction accuracy","View Insights →","/analytics","rgba(34,197,94,0.1)"]].map(([icon,desc,cta,href,bg]) => (
          <div key={icon} style={{background:bg,border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
            <div style={{fontSize:"2rem",marginBottom:"12px"}}>{(icon as string).split(" ")[0]}</div>
            <h3 style={{fontSize:"0.95rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"8px"}}>{(icon as string).split(" ").slice(1).join(" ")}</h3>
            <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",marginBottom:"12px"}}>{desc as string}</p>
            <Link href={href as string} style={{fontSize:"0.8rem",color:"hsl(var(--foreground))",textDecoration:"none"}}>{cta as string}</Link>
          </div>
        ))}
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
          <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))"}}>Attrition Risk Radar</h2>
          <Link href="/ai-insights/attrition" style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",textDecoration:"none"}}>Full Report →</Link>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          {riskEmployees.map(emp => (
            <div key={emp.name} style={{display:"flex",alignItems:"center",gap:"16px",padding:"16px",background:"rgba(255,255,255,0.02)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600,color:"hsl(var(--foreground))",flexShrink:0}}>
                {emp.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px"}}>
                  <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{emp.name}</span>
                  <span style={{fontSize:"0.7rem",padding:"2px 8px",borderRadius:"999px",background:levelBg[emp.level],color:levelColor[emp.level]}}>{emp.risk}% risk</span>
                </div>
                <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.dept} · {emp.reason}</div>
                <div style={{marginTop:"6px",width:"100%",height:"4px",background:"rgba(255,255,255,0.08)",borderRadius:"2px",overflow:"hidden"}}>
                  <div style={{width:`${emp.risk}%`,height:"100%",background:levelColor[emp.level],borderRadius:"2px"}}/>
                </div>
              </div>
              <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",maxWidth:"160px",textAlign:"right"}}>{emp.action}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
        <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.25rem",color:"hsl(var(--foreground))",marginBottom:"20px"}}>Critical Skill Gaps</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"12px"}}>
          {skillGaps.map(gap => (
            <div key={gap.skill} style={{padding:"16px",background:"rgba(255,255,255,0.02)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.05)"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}>
                <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{gap.skill}</span>
                <span style={{fontSize:"0.7rem",padding:"2px 8px",borderRadius:"999px",background:`rgba(${gap.priority==="high"?"239,68,68":"245,158,11"},0.1)`,color:priorityColor[gap.priority]}}>{gap.priority}</span>
              </div>
              <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{gap.dept} · {gap.affected} employees affected</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
'''

pages["ai-insights/attrition/page.tsx"] = '''"use client";
import Link from "next/link";

const employees = [
  {name:"Arjun Patel",dept:"Engineering",role:"Senior Developer",risk:87,level:"high",salary:"₹18L",tenure:"3 yrs",factors:["No promotion 24mo","Below market salary","High overtime"],recommendation:"Schedule immediate 1:1. Discuss promotion path and salary review. Consider 15% increase."},
  {name:"Karan Mehta",dept:"Sales",role:"Sales Executive",risk:78,level:"high",salary:"₹12L",tenure:"1 yr",factors:["Missed targets 3mo","Team conflict","Low job satisfaction"],recommendation:"Create PIP with clear targets. Arrange team mediation. Consider role change."},
  {name:"Priya Singh",dept:"Design",role:"UX Designer",risk:74,level:"high",salary:"₹14L",tenure:"4 yrs",factors:["Market salary gap","High overtime","Remote work denied"],recommendation:"Salary adjustment to market rate. Allow flexible work. Hire contractor to reduce overtime."},
  {name:"Dev Sharma",dept:"Engineering",role:"Backend Dev",risk:62,level:"medium",salary:"₹15L",tenure:"3 yrs",factors:["Role mismatch","Poor work-life balance","No mentorship"],recommendation:"Career counseling session. Assign senior mentor. Evaluate role alignment."},
  {name:"Sneha Verma",dept:"Product",role:"Product Manager",risk:58,level:"medium",salary:"₹22L",tenure:"2 yrs",factors:["Relocation request pending","Career plateau"],recommendation:"Consider remote work option or relocation support. Create promotion timeline."},
  {name:"Meera Nair",dept:"Analytics",role:"Data Scientist",risk:41,level:"low",salary:"₹20L",tenure:"4 yrs",factors:["Low learning opportunities"],recommendation:"Enroll in advanced ML course. Assign to challenging projects."},
  {name:"Rohit Kumar",dept:"Analytics",role:"Data Analyst",risk:22,level:"low",salary:"₹16L",tenure:"5 yrs",factors:["Stable and satisfied"],recommendation:"Continue recognition program. Discuss senior promotion."},
];

export default function AttritionPage() {
  const levelColor = {high:"#ef4444",medium:"#f59e0b",low:"#22c55e"};
  const levelBg = {high:"rgba(239,68,68,0.1)",medium:"rgba(245,158,11,0.1)",low:"rgba(34,197,94,0.1)"};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
        <Link href="/ai-insights" style={{width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"1rem"}}>←</Link>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Attrition Risk Report</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>AI-powered employee retention predictions · Updated 2 hours ago</p>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {[["High Risk","3","#ef4444","rgba(239,68,68,0.1)"],["Medium Risk","2","#f59e0b","rgba(245,158,11,0.1)"],["Low Risk","2","#22c55e","rgba(34,197,94,0.1)"],["Accuracy","94%","#3b82f6","rgba(59,130,246,0.1)"]].map(([label,val,color,bg]) => (
          <div key={label} style={{background:bg,border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color}}>{val}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        {employees.map(emp => (
          <div key={emp.name} style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${emp.level==="high"?"rgba(239,68,68,0.2)":emp.level==="medium"?"rgba(245,158,11,0.2)":"rgba(255,255,255,0.08)"}`,borderRadius:"16px",padding:"24px"}}>
            <div style={{display:"flex",gap:"16px",alignItems:"start",marginBottom:"16px"}}>
              <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.875rem",fontWeight:600,color:"hsl(var(--foreground))",flexShrink:0}}>
                {emp.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"4px",flexWrap:"wrap"}}>
                  <span style={{fontSize:"1rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{emp.name}</span>
                  <span style={{fontSize:"0.8rem",padding:"3px 10px",borderRadius:"999px",background:levelBg[emp.level],color:levelColor[emp.level],fontWeight:600}}>{emp.risk}% risk</span>
                  <span style={{fontSize:"0.75rem",padding:"3px 10px",borderRadius:"999px",background:"rgba(255,255,255,0.05)",color:"hsl(var(--muted-foreground))"}}>{emp.level} risk</span>
                </div>
                <div style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{emp.role} · {emp.dept} · Tenure: {emp.tenure} · Salary: {emp.salary}</div>
              </div>
            </div>
            <div style={{marginBottom:"12px"}}>
              <div style={{width:"100%",height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
                <div style={{width:`${emp.risk}%`,height:"100%",background:levelColor[emp.level],borderRadius:"4px"}}/>
              </div>
            </div>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"}}>
              {emp.factors.map(f => (
                <span key={f} style={{fontSize:"0.7rem",padding:"4px 10px",borderRadius:"999px",background:"rgba(255,255,255,0.05)",color:"hsl(var(--muted-foreground))",border:"1px solid rgba(255,255,255,0.08)"}}>{f}</span>
              ))}
            </div>
            <div style={{padding:"12px 16px",background:"rgba(255,255,255,0.03)",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.05)"}}>
              <span style={{fontSize:"0.75rem",fontWeight:600,color:"hsl(var(--foreground))"}}>AI Recommendation: </span>
              <span style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.recommendation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
'''

pages["ai-insights/skill-gap/page.tsx"] = '''"use client";
import Link from "next/link";

const gaps = [
  {skill:"Cloud Architecture (AWS/GCP)",dept:"Engineering",affected:23,priority:"high",description:"Critical for infrastructure modernization roadmap",courses:["AWS Solutions Architect","GCP Professional Cloud Architect","Cloud Security Fundamentals"]},
  {skill:"Kubernetes & Container Orchestration",dept:"Engineering",affected:18,priority:"high",description:"Required for microservices deployment pipeline",courses:["Certified Kubernetes Administrator","Docker Deep Dive","Helm Charts Mastery"]},
  {skill:"Data-Driven Product Management",dept:"Product",affected:8,priority:"medium",description:"Needed for metrics-based product decisions",courses:["Product Analytics with Mixpanel","SQL for Product Managers","A/B Testing Fundamentals"]},
  {skill:"Enterprise Sales Methodology",dept:"Sales",affected:34,priority:"medium",description:"Improving enterprise deal closure rates",courses:["SPIN Selling","Challenger Sale Method","Enterprise Account Management"]},
  {skill:"Machine Learning for Business",dept:"HR",affected:5,priority:"low",description:"Leveraging AI for HR decision making",courses:["HR Analytics with Python","People Analytics","AI Ethics in HR"]},
];

export default function SkillGapPage() {
  const priorityColor = {high:"#ef4444",medium:"#f59e0b",low:"#22c55e"};
  const priorityBg = {high:"rgba(239,68,68,0.1)",medium:"rgba(245,158,11,0.1)",low:"rgba(34,197,94,0.1)"};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
        <Link href="/ai-insights" style={{width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"1rem"}}>←</Link>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Skill Gap Analysis</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>AI-identified critical skill gaps across departments</p>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {[["High Priority Gaps","2","#ef4444"],["Employees Affected","88","#f59e0b"],["Courses Recommended","11","#3b82f6"]].map(([label,val,color]) => (
          <div key={label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color}}>{val}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        {gaps.map(gap => (
          <div key={gap.skill} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"12px",flexWrap:"wrap",gap:"8px"}}>
              <div>
                <h3 style={{fontSize:"1rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"4px"}}>{gap.skill}</h3>
                <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{gap.dept} · {gap.affected} employees affected</p>
                <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",marginTop:"4px",fontStyle:"italic"}}>{gap.description}</p>
              </div>
              <span style={{fontSize:"0.75rem",padding:"4px 12px",borderRadius:"999px",background:priorityBg[gap.priority],color:priorityColor[gap.priority],fontWeight:500,flexShrink:0}}>{gap.priority} priority</span>
            </div>
            <div>
              <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"10px",fontWeight:500}}>Recommended Learning Resources:</p>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                {gap.courses.map(c => (
                  <span key={c} style={{fontSize:"0.75rem",padding:"6px 14px",borderRadius:"999px",background:"rgba(255,255,255,0.05)",color:"hsl(var(--foreground))",border:"1px solid rgba(255,255,255,0.1)",cursor:"pointer",transition:"all 0.2s"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.1)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
'''

pages["leave/page.tsx"] = '''"use client";
import { useState } from "react";

const leaveRequests = [
  {id:"1",employee:"Priya Singh",type:"Annual Leave",from:"2024-12-20",to:"2024-12-27",days:5,status:"pending",reason:"Family vacation",dept:"Design"},
  {id:"2",employee:"Rohit Kumar",type:"Sick Leave",from:"2024-12-10",to:"2024-12-11",days:2,status:"approved",reason:"Medical appointment",dept:"Analytics"},
  {id:"3",employee:"Arjun Patel",type:"Casual Leave",from:"2024-12-15",to:"2024-12-15",days:1,status:"approved",reason:"Personal work",dept:"Engineering"},
  {id:"4",employee:"Karan Mehta",type:"Annual Leave",from:"2024-12-24",to:"2024-12-31",days:6,status:"rejected",reason:"Year end vacation",dept:"Sales"},
  {id:"5",employee:"Sneha Verma",type:"Maternity Leave",from:"2025-01-01",to:"2025-04-01",days:90,status:"approved",reason:"Maternity",dept:"Product"},
  {id:"6",employee:"Dev Sharma",type:"Sick Leave",from:"2024-12-12",to:"2024-12-13",days:2,status:"pending",reason:"Fever",dept:"Engineering"},
];

const balance = [{type:"Annual Leave",total:24,used:10},{type:"Sick Leave",total:12,used:3},{type:"Casual Leave",total:6,used:2}];

export default function LeavePage() {
  const [filter, setFilter] = useState("all");
  const [requests, setRequests] = useState(leaveRequests);
  const [showForm, setShowForm] = useState(false);
  const filtered = filter === "all" ? requests : requests.filter(r => r.status === filter);
  const statusConfig = {pending:{color:"#f59e0b",bg:"rgba(245,158,11,0.1)"},approved:{color:"#22c55e",bg:"rgba(34,197,94,0.1)"},rejected:{color:"#ef4444",bg:"rgba(239,68,68,0.1)"}};
  const approve = (id) => setRequests(r => r.map(x => x.id===id?{...x,status:"approved"}:x));
  const reject = (id) => setRequests(r => r.map(x => x.id===id?{...x,status:"rejected"}:x));
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Leave Management</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Track and approve leave requests</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>+ New Request</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {balance.map(b => (
          <div key={b.type} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"8px"}}>{b.type}</div>
            <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{b.total-b.used}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"12px"}}>days remaining</div>
            <div style={{width:"100%",height:"6px",background:"rgba(255,255,255,0.08)",borderRadius:"3px",overflow:"hidden"}}>
              <div style={{width:`${(b.used/b.total)*100}%`,height:"100%",background:"rgba(255,255,255,0.4)",borderRadius:"3px"}}/>
            </div>
            <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{b.used}/{b.total} used</div>
          </div>
        ))}
      </div>
      {showForm && (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h3 style={{fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Submit Leave Request</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",maxWidth:"600px"}}>
            {[["Leave Type","select"],["From Date","date"],["To Date","date"],["Reason","text"]].map(([label,type]) => (
              <div key={label} style={{gridColumn:label==="Reason"?"1/-1":"auto"}}>
                <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>{label}</label>
                {type==="select" ? (
                  <select style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
                    {["Annual Leave","Sick Leave","Casual Leave","Maternity Leave","Paternity Leave"].map(t=><option key={t} style={{background:"hsl(var(--card))"}}>{t}</option>)}
                  </select>
                ) : (
                  <input type={type} style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem",boxSizing:"border-box" as const}}/>
                )}
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"8px",marginTop:"16px"}}>
            <button onClick={() => setShowForm(false)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",padding:"8px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Submit Request</button>
            <button onClick={() => setShowForm(false)} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"8px 20px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Cancel</button>
          </div>
        </div>
      )}
      <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
        {["all","pending","approved","rejected"].map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{padding:"8px 16px",fontSize:"0.8rem",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"capitalize",background:filter===s?"hsl(var(--foreground))":"rgba(255,255,255,0.05)",color:filter===s?"hsl(var(--background))":"hsl(var(--muted-foreground))",transition:"all 0.2s"}}>{s}</button>
        ))}
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead>
            <tr style={{borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
              {["Employee","Type","Duration","Days","Status","Action"].map(h => (
                <th key={h} style={{textAlign:"left",padding:"14px 20px",fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",fontWeight:500}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(req => {
              const sc = statusConfig[req.status];
              return (
                <tr key={req.id} style={{borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                  <td style={{padding:"14px 20px"}}>
                    <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{req.employee}</div>
                    <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{req.dept}</div>
                  </td>
                  <td style={{padding:"14px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{req.type}</td>
                  <td style={{padding:"14px 20px",fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{req.from} → {req.to}</td>
                  <td style={{padding:"14px 20px",fontSize:"0.875rem",fontWeight:600,color:"hsl(var(--foreground))"}}>{req.days}d</td>
                  <td style={{padding:"14px 20px"}}>
                    <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px",background:sc.bg,color:sc.color}}>{req.status}</span>
                  </td>
                  <td style={{padding:"14px 20px"}}>
                    {req.status === "pending" && (
                      <div style={{display:"flex",gap:"8px"}}>
                        <button onClick={() => approve(req.id)} style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"6px",border:"none",background:"rgba(34,197,94,0.1)",color:"#22c55e",cursor:"pointer"}}>Approve</button>
                        <button onClick={() => reject(req.id)} style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"6px",border:"none",background:"rgba(239,68,68,0.1)",color:"#ef4444",cursor:"pointer"}}>Reject</button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
'''

pages["feedback/page.tsx"] = '''"use client";
import { useState } from "react";

const feedbacks = [
  {id:"1",from:"Rohit Kumar",to:"Arjun Patel",relation:"peer",rating:4,comment:"Excellent technical skills and great team player. Always delivers on time and helps others.",date:"2024-12-05",anonymous:False},
  {id:"2",from:"Anonymous",to:"Priya Singh",relation:"peer",rating:5,comment:"Best designer in the team. Creative, detail-oriented, and always open to feedback.",date:"2024-12-06",anonymous:True},
  {id:"3",from:"Anjali Rao",to:"Dev Sharma",relation:"manager",rating:3,comment:"Good technical knowledge but needs improvement in communication and meeting deadlines.",date:"2024-12-07",anonymous:False},
  {id:"4",from:"Dev Sharma",to:"Anjali Rao",relation:"report",rating:5,comment:"Outstanding manager. Always supportive, provides clear direction, and advocates for the team.",date:"2024-12-08",anonymous:False},
  {id:"5",from:"Meera Nair",to:"Rohit Kumar",relation:"peer",rating:4,comment:"Very analytical and thorough. Great at explaining complex data concepts to non-technical folks.",date:"2024-12-09",anonymous:False},
];

export default function FeedbackPage() {
  const [showForm, setShowForm] = useState(False);
  const [rating, setRating] = useState(0);
  const [anonymous, setAnonymous] = useState(False);
  const relationConfig = {peer:{color:"#3b82f6",bg:"rgba(59,130,246,0.1)"},manager:{color:"#8b5cf6",bg:"rgba(139,92,246,0.1)"},report:{color:"#22c55e",bg:"rgba(34,197,94,0.1)"},self:{color:"#f97316",bg:"rgba(249,115,22,0.1)"}};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>360° Feedback</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Multi-directional feedback system</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Give Feedback</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {[["Total Reviews","5","📝"],["Avg Rating","4.2/5","⭐"],["Anonymous","2","🔒"]].map(([label,val,icon]) => (
          <div key={label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"1.5rem",marginBottom:"8px"}}>{icon}</div>
            <div style={{fontSize:"1.75rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{val}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{label}</div>
          </div>
        ))}
      </div>
      {showForm && (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h3 style={{fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Submit Feedback</h3>
          <div style={{maxWidth:"500px",display:"flex",flexDirection:"column",gap:"16px"}}>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>Employee to Review</label>
              <select style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
                {["Arjun Patel","Priya Singh","Rohit Kumar","Dev Sharma","Sneha Verma","Anjali Rao"].map(e => <option key={e} style={{background:"hsl(var(--card))"}}>{e}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"8px"}}>Rating</label>
              <div style={{display:"flex",gap:"8px"}}>
                {[1,2,3,4,5].map(s => (
                  <button key={s} onClick={() => setRating(s)} style={{fontSize:"1.5rem",background:"transparent",border:"none",cursor:"pointer",transition:"transform 0.1s",transform:s<=rating?"scale(1.1)":"scale(1)"}}>
                    {s <= rating ? "⭐" : "☆"}
                  </button>
                ))}
                {rating > 0 && <span style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",alignSelf:"center",marginLeft:"8px"}}>{rating}/5</span>}
              </div>
            </div>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>Feedback</label>
              <textarea rows={4} placeholder="Share your honest and constructive feedback..." style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"10px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem",resize:"none",boxSizing:"border-box" as const}}/>
            </div>
            <div onClick={() => setAnonymous(!anonymous)} style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",padding:"12px",borderRadius:"8px",background:anonymous?"rgba(255,255,255,0.05)":"transparent",border:"1px solid",borderColor:anonymous?"rgba(255,255,255,0.15)":"transparent",transition:"all 0.2s"}}>
              <div style={{width:"20px",height:"20px",borderRadius:"4px",border:`2px solid ${anonymous?"hsl(var(--foreground))":"rgba(255,255,255,0.2)"}`,background:anonymous?"rgba(255,255,255,0.2)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {anonymous && <span style={{fontSize:"0.7rem",color:"hsl(var(--foreground))"}}>✓</span>}
              </div>
              <div>
                <div style={{fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>Submit anonymously</div>
                <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Your name will be hidden from the recipient</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <button onClick={() => setShowForm(False)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Submit Feedback</button>
              <button onClick={() => setShowForm(False)} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"10px 24px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
        {feedbacks.map(fb => {
          const rc = relationConfig[fb.relation];
          return (
            <div key={fb.id} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"12px",flexWrap:"wrap",gap:"8px"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                    <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{fb.from}</span>
                    <span style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>→</span>
                    <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{fb.to}</span>
                    <span style={{fontSize:"0.7rem",padding:"2px 8px",borderRadius:"999px",background:rc.bg,color:rc.color}}>{fb.relation}</span>
                  </div>
                  <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{fb.date}</div>
                </div>
                <div style={{display:"flex",gap:"2px"}}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{fontSize:"0.875rem"}}>{s<=fb.rating?"⭐":"☆"}</span>)}
                </div>
              </div>
              <p style={{fontSize:"0.875rem",color:"hsl(var(--muted-foreground))",lineHeight:"1.6",fontStyle:"italic"}}>"{fb.comment}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
'''

pages["notifications/page.tsx"] = '''"use client";
import { useState } from "react";

const initNotifications = [
  {id:1,title:"Performance Alert",message:"Arjun Patel performance dropped for 2 consecutive months. Immediate action recommended.",time:"5 minutes ago",unread:True,type:"alert",icon:"🚨"},
  {id:2,title:"Review Due",message:"Q4 performance review for Priya Singh is due in 3 days. Please schedule now.",time:"1 hour ago",unread:True,type:"reminder",icon:"📅"},
  {id:3,title:"Leave Request",message:"Rohit Kumar has requested 5 days of annual leave from Dec 20-27. Approval needed.",time:"2 hours ago",unread:True,type:"action",icon:"📋"},
  {id:4,title:"Goal Achieved",message:"Sales team has completed Q4 OKR target at 102%! Outstanding performance.",time:"5 hours ago",unread:False,type:"success",icon:"🎯"},
  {id:5,title:"New Employee",message:"Kavya Reddy joined the Engineering team today. Welcome aboard!",time:"Yesterday",unread:False,type:"info",icon:"👋"},
  {id:6,title:"Budget Alert",message:"Engineering department has used 85% of Q4 training budget. Review allocation.",time:"2 days ago",unread:False,type:"warning",icon:"💰"},
  {id:7,title:"Attrition Risk",message:"AI model detected 3 new high-risk employees in DevOps team. Review recommended.",time:"3 days ago",unread:False,type:"alert",icon:"🔮"},
  {id:8,title:"Weekly Report",message:"Your weekly HR summary is ready. 12 key highlights this week.",time:"4 days ago",unread:False,type:"info",icon:"📊"},
];

const typeColor = {alert:"#ef4444",reminder:"#3b82f6",action:"#f59e0b",success:"#22c55e",info:"#8b5cf6",warning:"#f97316"};
const typeBg = {alert:"rgba(239,68,68,0.08)",reminder:"rgba(59,130,246,0.08)",action:"rgba(245,158,11,0.08)",success:"rgba(34,197,94,0.08)",info:"rgba(139,92,246,0.08)",warning:"rgba(249,115,22,0.08)"};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initNotifications);
  const [filter, setFilter] = useState("all");
  const unreadCount = notifications.filter(n => n.unread).length;
  const markRead = (id) => setNotifications(n => n.map(x => x.id===id?{...x,unread:False}:x));
  const markAllRead = () => setNotifications(n => n.map(x => ({...x,unread:False})));
  const filtered = filter === "all" ? notifications : filter === "unread" ? notifications.filter(n => n.unread) : notifications.filter(n => n.type === filter);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Notifications</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>{unreadCount} unread · {notifications.length} total</p>
        </div>
        {unreadCount > 0 && <button onClick={markAllRead} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"8px 16px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.8rem"}}>Mark all as read</button>}
      </div>
      <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
        {["all","unread","alert","reminder","action","success"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{padding:"6px 14px",fontSize:"0.8rem",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"capitalize",background:filter===f?"hsl(var(--foreground))":"rgba(255,255,255,0.05)",color:filter===f?"hsl(var(--background))":"hsl(var(--muted-foreground))",transition:"all 0.2s"}}>{f}</button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        {filtered.map(n => (
          <div key={n.id} onClick={() => markRead(n.id)} style={{background:n.unread?typeBg[n.type]:"rgba(255,255,255,0.02)",border:`1px solid ${n.unread?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.05)"}`,borderRadius:"16px",padding:"20px",cursor:"pointer",transition:"all 0.2s",borderLeft:n.unread?`3px solid ${typeColor[n.type]}`:"3px solid transparent"}} onMouseEnter={e=>e.currentTarget.style.background=n.unread?typeBg[n.type]:"rgba(255,255,255,0.03)"} onMouseLeave={e=>e.currentTarget.style.background=n.unread?typeBg[n.type]:"rgba(255,255,255,0.02)"}>
            <div style={{display:"flex",gap:"16px",alignItems:"start"}}>
              <div style={{width:"40px",height:"40px",borderRadius:"12px",background:`${typeColor[n.type]}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0}}>{n.icon}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                  <span style={{fontSize:"0.875rem",fontWeight:n.unread?600:500,color:"hsl(var(--foreground))"}}>{n.title}</span>
                  {n.unread && <div style={{width:"6px",height:"6px",borderRadius:"50%",background:typeColor[n.type]}}/>}
                </div>
                <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",lineHeight:"1.5",marginBottom:"6px"}}>{n.message}</p>
                <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>{n.time}</span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div style={{textAlign:"center",padding:"48px",color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>No notifications found.</div>}
      </div>
    </div>
  );
}
'''

pages["reports/page.tsx"] = '''"use client";
import { useState } from "react";

const reports = [
  {id:"1",title:"Monthly HR Summary - December 2024",desc:"Complete HR metrics including headcount, attrition, performance, and leave analytics",type:"PDF",size:"2.4 MB",date:"Dec 1, 2024",icon:"📊",category:"monthly"},
  {id:"2",title:"Q4 Performance Report 2024",desc:"Quarterly performance analysis across all departments with trend comparisons",type:"Excel",size:"1.8 MB",date:"Oct 1, 2024",icon:"📈",category:"quarterly"},
  {id:"3",title:"Attrition Risk Analysis - AI Report",desc:"Machine learning powered attrition predictions with recommendations",type:"PDF",size:"890 KB",date:"Dec 7, 2024",icon:"🔮",category:"ai"},
  {id:"4",title:"Salary Benchmarking Report 2024",desc:"Market salary comparison across roles, departments, and geographies",type:"Excel",size:"3.1 MB",date:"Nov 15, 2024",icon:"💰",category:"annual"},
  {id:"5",title:"Training & Development Report",desc:"Learning completion rates, certification status, and skill gap analysis",type:"PDF",size:"1.2 MB",date:"Nov 30, 2024",icon:"📚",category:"monthly"},
  {id:"6",title:"2025 Headcount Planning",desc:"AI-driven headcount forecast with budget projections for next fiscal year",type:"Excel",size:"956 KB",date:"Dec 5, 2024",icon:"👥",category:"ai"},
  {id:"7",title:"Diversity & Inclusion Report",desc:"DEI metrics, gender pay gap analysis, and inclusion index scores",type:"PDF",size:"1.5 MB",date:"Nov 20, 2024",icon:"🌍",category:"quarterly"},
  {id:"8",title:"Annual Compliance Report 2024",desc:"HR compliance checklist, audit findings, and regulatory adherence status",type:"PDF",size:"2.1 MB",date:"Dec 1, 2024",icon:"✅",category:"annual"},
];

export default function ReportsPage() {
  const [filter, setFilter] = useState("all");
  const [generating, setGenerating] = useState(False);
  const filtered = filter === "all" ? reports : reports.filter(r => r.category === filter || r.type.toLowerCase() === filter);
  const handleGenerate = () => { setGenerating(True); setTimeout(() => setGenerating(False), 2000); };
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Reports</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Download, generate and export HR reports</p>
        </div>
        <button onClick={handleGenerate} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>
          {generating ? "⏳ Generating..." : "⚡ Generate Report"}
        </button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"12px"}}>
        {[["Total Reports",reports.length,"📁"],["PDF Reports",reports.filter(r=>r.type==="PDF").length,"📄"],["Excel Reports",reports.filter(r=>r.type==="Excel").length,"📊"],["AI Reports",reports.filter(r=>r.category==="ai").length,"🤖"]].map(([label,val,icon]) => (
          <div key={label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"16px",textAlign:"center"}}>
            <div style={{fontSize:"1.25rem",marginBottom:"4px"}}>{icon}</div>
            <div style={{fontSize:"1.5rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{val}</div>
            <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
        {["all","monthly","quarterly","annual","ai","pdf","excel"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{padding:"6px 14px",fontSize:"0.8rem",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"capitalize",background:filter===f?"hsl(var(--foreground))":"rgba(255,255,255,0.05)",color:filter===f?"hsl(var(--background))":"hsl(var(--muted-foreground))",transition:"all 0.2s"}}>{f}</button>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"16px"}}>
        {filtered.map(report => (
          <div key={report.id} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",transition:"transform 0.2s"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.02)"} onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}>
            <div style={{fontSize:"2rem",marginBottom:"12px"}}>{report.icon}</div>
            <h3 style={{fontSize:"0.9rem",fontWeight:500,color:"hsl(var(--foreground))",marginBottom:"6px",lineHeight:"1.4"}}>{report.title}</h3>
            <p style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginBottom:"16px",lineHeight:"1.5"}}>{report.desc}</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{display:"flex",gap:"8px",alignItems:"center"}}>
                <span style={{fontSize:"0.7rem",padding:"3px 8px",borderRadius:"6px",background:report.type==="PDF"?"rgba(239,68,68,0.1)":"rgba(34,197,94,0.1)",color:report.type==="PDF"?"#ef4444":"#22c55e",fontWeight:500}}>{report.type}</span>
                <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>{report.size}</span>
              </div>
              <button style={{fontSize:"0.75rem",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"6px",padding:"4px 10px",color:"hsl(var(--foreground))",cursor:"pointer"}}>↓ Download</button>
            </div>
            <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))",marginTop:"8px"}}>{report.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
'''

pages["onboarding/page.tsx"] = '''"use client";
import { useState } from "react";

const employees = [
  {id:"1",name:"Kavya Reddy",role:"Frontend Developer",dept:"Engineering",joined:"2024-12-09",progress:60,manager:"Anjali Rao",steps:[{title:"Account & System Setup",done:True,date:"Dec 9"},{title:"Equipment Assigned",done:True,date:"Dec 9"},{title:"Team Introduction",done:True,date:"Dec 10"},{title:"HR Policy Orientation",done:False,date:"Dec 12"},{title:"Project Assignment",done:False,date:"Dec 15"},{title:"30-Day Check-in",done:False,date:"Jan 8"}]},
  {id:"2",name:"Rahul Gupta",role:"Sales Executive",dept:"Sales",joined:"2024-12-05",progress:83,manager:"Karan Mehta",steps:[{title:"Account & System Setup",done:True,date:"Dec 5"},{title:"Equipment Assigned",done:True,date:"Dec 5"},{title:"Team Introduction",done:True,date:"Dec 6"},{title:"HR Policy Orientation",done:True,date:"Dec 7"},{title:"Sales Training",done:True,date:"Dec 9"},{title:"First Client Meeting",done:False,date:"Dec 16"}]},
  {id:"3",name:"Aisha Patel",role:"Data Analyst",dept:"Analytics",joined:"2024-12-11",progress:33,manager:"Rohit Kumar",steps:[{title:"Account & System Setup",done:True,date:"Dec 11"},{title:"Equipment Assigned",done:True,date:"Dec 11"},{title:"Team Introduction",done:False,date:"Dec 13"},{title:"HR Policy Orientation",done:False,date:"Dec 14"},{title:"Tools Training",done:False,date:"Dec 18"},{title:"First Project",done:False,date:"Dec 20"}]},
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState("1");
  const emp = employees.find(e => e.id === selected);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div>
        <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Onboarding</h1>
        <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>{employees.length} employees currently onboarding</p>
      </div>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
        {employees.map(e => (
          <button key={e.id} onClick={() => setSelected(e.id)} style={{display:"flex",alignItems:"center",gap:"12px",padding:"14px 18px",borderRadius:"14px",border:`1px solid ${selected===e.id?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.08)"}`,background:selected===e.id?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.02)",cursor:"pointer",transition:"all 0.2s",textAlign:"left"}}>
            <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:600,color:"hsl(var(--foreground))",flexShrink:0}}>
              {e.name.split(" ").map(n=>n[0]).join("")}
            </div>
            <div>
              <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{e.name}</div>
              <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>{e.progress}% complete</div>
            </div>
          </button>
        ))}
      </div>
      {emp && (
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:"24px"}}>
          <div>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px",marginBottom:"16px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"20px"}}>
                <div>
                  <h2 style={{fontFamily:"Instrument Serif,serif",fontSize:"1.5rem",color:"hsl(var(--foreground))",marginBottom:"4px"}}>{emp.name}</h2>
                  <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{emp.role} · {emp.dept} · Joined {emp.joined}</p>
                  <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",marginTop:"2px"}}>Manager: {emp.manager}</p>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color:emp.progress>=75?"#22c55e":emp.progress>=50?"#f59e0b":"#ef4444"}}>{emp.progress}%</div>
                  <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Complete</div>
                </div>
              </div>
              <div style={{marginBottom:"24px"}}>
                <div style={{width:"100%",height:"8px",background:"rgba(255,255,255,0.08)",borderRadius:"4px",overflow:"hidden"}}>
                  <div style={{width:`${emp.progress}%`,height:"100%",background:emp.progress>=75?"#22c55e":emp.progress>=50?"#f59e0b":"#ef4444",borderRadius:"4px",transition:"width 0.5s"}}/>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {emp.steps.map((step, i) => (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",borderRadius:"10px",background:step.done?"rgba(34,197,94,0.05)":"rgba(255,255,255,0.02)",border:`1px solid ${step.done?"rgba(34,197,94,0.15)":"rgba(255,255,255,0.05)"}`}}>
                    <div style={{width:"28px",height:"28px",borderRadius:"50%",background:step.done?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:step.done?"#22c55e":"hsl(var(--muted-foreground))",fontSize:step.done?"0.75rem":"0.8rem",fontWeight:600}}>
                      {step.done ? "✓" : i+1}
                    </div>
                    <div style={{flex:1}}>
                      <span style={{fontSize:"0.875rem",color:step.done?"hsl(var(--muted-foreground))":"hsl(var(--foreground))",textDecoration:step.done?"line-through":"none"}}>{step.title}</span>
                    </div>
                    <span style={{fontSize:"0.7rem",color:step.done?"#22c55e":"hsl(var(--muted-foreground))",flexShrink:0}}>{step.done?"✓ "+step.date:"📅 "+step.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
              <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Quick Actions</h3>
              <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
                {["📧 Send Welcome Email","📅 Schedule Team Lunch","👥 Assign Buddy/Mentor","🎯 Set 30-Day Goals","💬 Schedule 1:1 Meeting","📝 Share Onboarding Guide"].map(action => (
                  <button key={action} style={{width:"100%",textAlign:"left",padding:"12px 16px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.02)",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.8rem",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.2s"}} onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.02)";e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}}>
                    <span>{action}</span>
                    <span style={{color:"hsl(var(--muted-foreground))"}}>→</span>
                  </button>
                ))}
              </div>
            </div>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
              <h3 style={{fontFamily:"Instrument Serif,serif",fontSize:"1rem",color:"hsl(var(--foreground))",marginBottom:"12px"}}>Onboarding Stats</h3>
              {[["Completion",emp.progress+"%"],["Days Since Joining",(new Date().getDate()-parseInt(emp.joined.split("-")[2]))+" days"],["Steps Completed",emp.steps.filter(s=>s.done).length+"/"+emp.steps.length],["Status",emp.progress>=75?"On Track":emp.progress>=50?"In Progress":"Needs Attention"]].map(([label,val]) => (
                <div key={label} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                  <span style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))"}}>{label}</span>
                  <span style={{fontSize:"0.8rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
'''

# Fix Python True/False to JS true/false
for path in pages:
    pages[path] = pages[path].replace("True", "true").replace("False", "false")

# Write all files
base_dir = os.path.expanduser("~/Music/pulseHR/client/src/app/(dashboard)")
fixed = 0
for path, content in pages.items():
    full_path = os.path.join(base_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w") as f:
        f.write(content)
    print(f"✅ Fixed: {path}")
    fixed += 1

print(f"\n🎉 All {fixed} pages fixed with full content!")
