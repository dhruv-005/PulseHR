"use client";

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
