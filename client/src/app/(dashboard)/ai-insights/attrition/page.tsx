"use client";
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
