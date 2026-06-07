"use client";
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
