"use client";
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
