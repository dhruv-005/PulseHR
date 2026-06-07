"use client";
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
