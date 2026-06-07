"use client";
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
