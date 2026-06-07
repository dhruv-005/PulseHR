"use client";
import { useState } from "react";

const employees = [
  {id:"1",name:"Kavya Reddy",role:"Frontend Developer",dept:"Engineering",joined:"2024-12-09",progress:60,manager:"Anjali Rao",steps:[{title:"Account & System Setup",done:true,date:"Dec 9"},{title:"Equipment Assigned",done:true,date:"Dec 9"},{title:"Team Introduction",done:true,date:"Dec 10"},{title:"HR Policy Orientation",done:false,date:"Dec 12"},{title:"Project Assignment",done:false,date:"Dec 15"},{title:"30-Day Check-in",done:false,date:"Jan 8"}]},
  {id:"2",name:"Rahul Gupta",role:"Sales Executive",dept:"Sales",joined:"2024-12-05",progress:83,manager:"Karan Mehta",steps:[{title:"Account & System Setup",done:true,date:"Dec 5"},{title:"Equipment Assigned",done:true,date:"Dec 5"},{title:"Team Introduction",done:true,date:"Dec 6"},{title:"HR Policy Orientation",done:true,date:"Dec 7"},{title:"Sales Training",done:true,date:"Dec 9"},{title:"First Client Meeting",done:false,date:"Dec 16"}]},
  {id:"3",name:"Aisha Patel",role:"Data Analyst",dept:"Analytics",joined:"2024-12-11",progress:33,manager:"Rohit Kumar",steps:[{title:"Account & System Setup",done:true,date:"Dec 11"},{title:"Equipment Assigned",done:true,date:"Dec 11"},{title:"Team Introduction",done:false,date:"Dec 13"},{title:"HR Policy Orientation",done:false,date:"Dec 14"},{title:"Tools Training",done:false,date:"Dec 18"},{title:"First Project",done:false,date:"Dec 20"}]},
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
