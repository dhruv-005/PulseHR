"use client";
import { useState } from "react";

const initNotifications = [
  {id:1,title:"Performance Alert",message:"Arjun Patel performance dropped for 2 consecutive months. Immediate action recommended.",time:"5 minutes ago",unread:true,type:"alert",icon:"🚨"},
  {id:2,title:"Review Due",message:"Q4 performance review for Priya Singh is due in 3 days. Please schedule now.",time:"1 hour ago",unread:true,type:"reminder",icon:"📅"},
  {id:3,title:"Leave Request",message:"Rohit Kumar has requested 5 days of annual leave from Dec 20-27. Approval needed.",time:"2 hours ago",unread:true,type:"action",icon:"📋"},
  {id:4,title:"Goal Achieved",message:"Sales team has completed Q4 OKR target at 102%! Outstanding performance.",time:"5 hours ago",unread:false,type:"success",icon:"🎯"},
  {id:5,title:"New Employee",message:"Kavya Reddy joined the Engineering team today. Welcome aboard!",time:"Yesterday",unread:false,type:"info",icon:"👋"},
  {id:6,title:"Budget Alert",message:"Engineering department has used 85% of Q4 training budget. Review allocation.",time:"2 days ago",unread:false,type:"warning",icon:"💰"},
  {id:7,title:"Attrition Risk",message:"AI model detected 3 new high-risk employees in DevOps team. Review recommended.",time:"3 days ago",unread:false,type:"alert",icon:"🔮"},
  {id:8,title:"Weekly Report",message:"Your weekly HR summary is ready. 12 key highlights this week.",time:"4 days ago",unread:false,type:"info",icon:"📊"},
];

const typeColor = {alert:"#ef4444",reminder:"#3b82f6",action:"#f59e0b",success:"#22c55e",info:"#8b5cf6",warning:"#f97316"};
const typeBg = {alert:"rgba(239,68,68,0.08)",reminder:"rgba(59,130,246,0.08)",action:"rgba(245,158,11,0.08)",success:"rgba(34,197,94,0.08)",info:"rgba(139,92,246,0.08)",warning:"rgba(249,115,22,0.08)"};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initNotifications);
  const [filter, setFilter] = useState("all");
  const unreadCount = notifications.filter(n => n.unread).length;
  const markRead = (id) => setNotifications(n => n.map(x => x.id===id?{...x,unread:false}:x));
  const markAllRead = () => setNotifications(n => n.map(x => ({...x,unread:false})));
  const filtered = filter === "all" ? notifications : filter === "unread" ? notifications.filter(n => n.unread) : notifications.filter(n => n.type === filter);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>Notifications</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>{unreadCount} unread · {notifications.length} total</p>
        </div>
        {unreadCount > 0 && <button onClick={markAllRead} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"8px 16px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.8rem"}}>Mark all as read</button>}
      </div>
      <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
        {["all","unread","alert","reminder","action","success"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{padding:"6px 14px",fontSize:"0.8rem",borderRadius:"8px",border:"none",cursor:"pointer",textTransform:"capitalize",background:filter===f?"hsl(var(--foreground))":"rgba(255,255,255,0.05)",color:filter===f?"hsl(var(--background))":"hsl(var(--muted-foreground))",transition:"all 0.2s"}}>{f}</button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        {filtered.map(n => (
          <div key={n.id} onClick={() => markRead(n.id)} style={{background:n.unread?typeBg[n.type]:"rgba(255,255,255,0.02)",border:`1px solid ${n.unread?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.05)"}`,borderRadius:"16px",padding:"20px",cursor:"pointer",transition:"all 0.2s",borderLeft:n.unread?`3px solid ${typeColor[n.type]}`:"3px solid transparent"}} onMouseEnter={e=>e.currentTarget.style.background=n.unread?typeBg[n.type]:"rgba(255,255,255,0.03)"} onMouseLeave={e=>e.currentTarget.style.background=n.unread?typeBg[n.type]:"rgba(255,255,255,0.02)"}>
            <div style={{display:"flex",gap:"16px",alignItems:"start"}}>
              <div style={{width:"40px",height:"40px",borderRadius:"12px",background:`${typeColor[n.type]}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",flexShrink:0}}>{n.icon}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                  <span style={{fontSize:"0.875rem",fontWeight:n.unread?600:500,color:"hsl(var(--foreground))"}}>{n.title}</span>
                  {n.unread && <div style={{width:"6px",height:"6px",borderRadius:"50%",background:typeColor[n.type]}}/>}
                </div>
                <p style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",lineHeight:"1.5",marginBottom:"6px"}}>{n.message}</p>
                <span style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>{n.time}</span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div style={{textAlign:"center",padding:"48px",color:"hsl(var(--muted-foreground))",fontSize:"0.875rem"}}>No notifications found.</div>}
      </div>
    </div>
  );
}
