"use client";
import { useState } from "react";
import Link from "next/link";

const employees = [
  {id:"1",name:"Arjun Patel",role:"Senior Developer",dept:"Engineering",status:"active",score:82,risk:87,salary:"₹18L",joined:"2021-03-15",email:"arjun@company.com"},
  {id:"2",name:"Priya Singh",role:"UX Designer",dept:"Design",status:"active",score:78,risk:74,salary:"₹14L",joined:"2020-07-22",email:"priya@company.com"},
  {id:"3",name:"Rohit Kumar",role:"Data Analyst",dept:"Analytics",status:"active",score:91,risk:32,salary:"₹16L",joined:"2019-11-10",email:"rohit@company.com"},
  {id:"4",name:"Sneha Verma",role:"Product Manager",dept:"Product",status:"on_leave",score:88,risk:45,salary:"₹22L",joined:"2022-01-05",email:"sneha@company.com"},
  {id:"5",name:"Dev Sharma",role:"Backend Dev",dept:"Engineering",status:"active",score:76,risk:58,salary:"₹15L",joined:"2021-08-19",email:"dev@company.com"},
  {id:"6",name:"Anjali Rao",role:"Engineering Lead",dept:"Engineering",status:"active",score:94,risk:22,salary:"₹28L",joined:"2018-04-30",email:"anjali@company.com"},
  {id:"7",name:"Meera Nair",role:"Data Scientist",dept:"Analytics",status:"active",score:87,risk:41,salary:"₹20L",joined:"2020-09-14",email:"meera@company.com"},
  {id:"8",name:"Karan Mehta",role:"Sales Executive",dept:"Sales",status:"inactive",score:65,risk:78,salary:"₹12L",joined:"2023-02-28",email:"karan@company.com"},
];

export default function EmployeesPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");
  const [status, setStatus] = useState("all");
  const depts = ["all", ...Array.from(new Set(employees.map(e => e.dept)))];
  const filtered = employees.filter(e =>
    (dept === "all" || e.dept === dept) &&
    (status === "all" || e.status === status) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.role.toLowerCase().includes(search.toLowerCase()) ||
     e.email.toLowerCase().includes(search.toLowerCase()))
  );
  const statusColor = {active:"bg-green-500/10 text-green-400",on_leave:"bg-yellow-500/10 text-yellow-400",inactive:"bg-red-500/10 text-red-400"};
  const riskColor = (r) => r >= 75 ? "bg-red-500/10 text-red-400" : r >= 50 ? "bg-yellow-500/10 text-yellow-400" : "bg-green-500/10 text-green-400";
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Employees</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>{filtered.length} of {employees.length} employees</p>
        </div>
        <Link href="/employees/new" style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"10px 20px",color:"hsl(var(--foreground))",textDecoration:"none",fontSize:"0.875rem"}}>+ Add Employee</Link>
      </div>
      <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name, role, email..." style={{flex:1,minWidth:"200px",background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}/>
        <select value={dept} onChange={e => setDept(e.target.value)} style={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
          {depts.map(d => <option key={d} value={d} style={{background:"hsl(var(--card))"}}>{d === "all" ? "All Departments" : d}</option>)}
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} style={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"10px",padding:"10px 16px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
          {["all","active","on_leave","inactive"].map(s => <option key={s} value={s} style={{background:"hsl(var(--card))"}}>{s === "all" ? "All Status" : s.replace("_"," ")}</option>)}
        </select>
      </div>
      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead>
            <tr style={{borderBottom:"1px solid hsl(var(--border))"}}>
              {["Employee","Department","Status","Performance","Attrition Risk","Salary","Joined","Action"].map(h => (
                <th key={h} style={{textAlign:"left",padding:"16px 20px",fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",fontWeight:500}}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <tr key={emp.id} style={{borderBottom:"1px solid hsl(var(--border))"}} onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.02)"} onMouseLeave={e => e.currentTarget.style.background="transparent"}>
                <td style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                    <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",color:"hsl(var(--foreground))",fontWeight:600}}>
                      {emp.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{emp.name}</div>
                      <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <div style={{fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{emp.dept}</div>
                  <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{emp.role}</div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px"}} className={statusColor[emp.status]}>{emp.status.replace("_"," ")}</span>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"60px",height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"}}>
                      <div style={{width:`${emp.score}%`,height:"100%",background:"rgba(255,255,255,0.6)",borderRadius:"3px"}}/>
                    </div>
                    <span style={{fontSize:"0.75rem",color:"hsl(var(--foreground))"}}>{emp.score}%</span>
                  </div>
                </td>
                <td style={{padding:"16px 20px"}}>
                  <span style={{fontSize:"0.75rem",padding:"4px 10px",borderRadius:"999px"}} className={riskColor(emp.risk)}>{emp.risk}%</span>
                </td>
                <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>{emp.salary}</td>
                <td style={{padding:"16px 20px",fontSize:"0.875rem",color:"hsl(var(--muted-foreground))"}}>{emp.joined}</td>
                <td style={{padding:"16px 20px"}}>
                  <Link href={`/employees/${emp.id}`} style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",textDecoration:"none"}}>View →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div style={{textAlign:"center",padding:"48px",color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>No employees found matching your search.</div>}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px"}}>
        {[
          {label:"Total Employees",value:employees.length,color:"#3b82f6"},
          {label:"Active",value:employees.filter(e=>e.status==="active").length,color:"#22c55e"},
          {label:"On Leave",value:employees.filter(e=>e.status==="on_leave").length,color:"#f59e0b"},
          {label:"High Risk",value:employees.filter(e=>e.risk>=75).length,color:"#ef4444"},
        ].map(stat => (
          <div key={stat.label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"2rem",fontFamily:"Instrument Serif,serif",color:stat.color}}>{stat.value}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
