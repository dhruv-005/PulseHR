"use client";
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
