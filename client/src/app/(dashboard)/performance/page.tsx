"use client";
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
