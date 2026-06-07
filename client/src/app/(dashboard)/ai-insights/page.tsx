"use client";
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
