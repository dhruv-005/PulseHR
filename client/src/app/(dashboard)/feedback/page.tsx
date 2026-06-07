"use client";
import { useState } from "react";

const feedbacks = [
  {id:"1",from:"Rohit Kumar",to:"Arjun Patel",relation:"peer",rating:4,comment:"Excellent technical skills and great team player. Always delivers on time and helps others.",date:"2024-12-05",anonymous:false},
  {id:"2",from:"Anonymous",to:"Priya Singh",relation:"peer",rating:5,comment:"Best designer in the team. Creative, detail-oriented, and always open to feedback.",date:"2024-12-06",anonymous:true},
  {id:"3",from:"Anjali Rao",to:"Dev Sharma",relation:"manager",rating:3,comment:"Good technical knowledge but needs improvement in communication and meeting deadlines.",date:"2024-12-07",anonymous:false},
  {id:"4",from:"Dev Sharma",to:"Anjali Rao",relation:"report",rating:5,comment:"Outstanding manager. Always supportive, provides clear direction, and advocates for the team.",date:"2024-12-08",anonymous:false},
  {id:"5",from:"Meera Nair",to:"Rohit Kumar",relation:"peer",rating:4,comment:"Very analytical and thorough. Great at explaining complex data concepts to non-technical folks.",date:"2024-12-09",anonymous:false},
];

export default function FeedbackPage() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [anonymous, setAnonymous] = useState(false);
  const relationConfig = {peer:{color:"#3b82f6",bg:"rgba(59,130,246,0.1)"},manager:{color:"#8b5cf6",bg:"rgba(139,92,246,0.1)"},report:{color:"#22c55e",bg:"rgba(34,197,94,0.1)"},self:{color:"#f97316",bg:"rgba(249,115,22,0.1)"}};
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",flexWrap:"wrap",gap:"16px"}}>
        <div>
          <h1 style={{fontFamily:"Instrument Serif,serif",fontSize:"2rem",color:"hsl(var(--foreground))"}}>360° Feedback</h1>
          <p style={{color:"hsl(var(--muted-foreground))",fontSize:"0.875rem",marginTop:"4px"}}>Multi-directional feedback system</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"10px 20px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Give Feedback</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"16px"}}>
        {[["Total Reviews","5","📝"],["Avg Rating","4.2/5","⭐"],["Anonymous","2","🔒"]].map(([label,val,icon]) => (
          <div key={label} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px",textAlign:"center"}}>
            <div style={{fontSize:"1.5rem",marginBottom:"8px"}}>{icon}</div>
            <div style={{fontSize:"1.75rem",fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))"}}>{val}</div>
            <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))",marginTop:"4px"}}>{label}</div>
          </div>
        ))}
      </div>
      {showForm && (
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"24px"}}>
          <h3 style={{fontFamily:"Instrument Serif,serif",color:"hsl(var(--foreground))",marginBottom:"16px"}}>Submit Feedback</h3>
          <div style={{maxWidth:"500px",display:"flex",flexDirection:"column",gap:"16px"}}>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>Employee to Review</label>
              <select style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"8px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem"}}>
                {["Arjun Patel","Priya Singh","Rohit Kumar","Dev Sharma","Sneha Verma","Anjali Rao"].map(e => <option key={e} style={{background:"hsl(var(--card))"}}>{e}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"8px"}}>Rating</label>
              <div style={{display:"flex",gap:"8px"}}>
                {[1,2,3,4,5].map(s => (
                  <button key={s} onClick={() => setRating(s)} style={{fontSize:"1.5rem",background:"transparent",border:"none",cursor:"pointer",transition:"transform 0.1s",transform:s<=rating?"scale(1.1)":"scale(1)"}}>
                    {s <= rating ? "⭐" : "☆"}
                  </button>
                ))}
                {rating > 0 && <span style={{fontSize:"0.8rem",color:"hsl(var(--muted-foreground))",alignSelf:"center",marginLeft:"8px"}}>{rating}/5</span>}
              </div>
            </div>
            <div>
              <label style={{fontSize:"0.75rem",fontWeight:500,color:"hsl(var(--foreground))",display:"block",marginBottom:"6px"}}>Feedback</label>
              <textarea rows={4} placeholder="Share your honest and constructive feedback..." style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid hsl(var(--border))",borderRadius:"8px",padding:"10px 12px",color:"hsl(var(--foreground))",outline:"none",fontSize:"0.875rem",resize:"none",boxSizing:"border-box" as const}}/>
            </div>
            <div onClick={() => setAnonymous(!anonymous)} style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer",padding:"12px",borderRadius:"8px",background:anonymous?"rgba(255,255,255,0.05)":"transparent",border:"1px solid",borderColor:anonymous?"rgba(255,255,255,0.15)":"transparent",transition:"all 0.2s"}}>
              <div style={{width:"20px",height:"20px",borderRadius:"4px",border:`2px solid ${anonymous?"hsl(var(--foreground))":"rgba(255,255,255,0.2)"}`,background:anonymous?"rgba(255,255,255,0.2)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {anonymous && <span style={{fontSize:"0.7rem",color:"hsl(var(--foreground))"}}>✓</span>}
              </div>
              <div>
                <div style={{fontSize:"0.875rem",color:"hsl(var(--foreground))"}}>Submit anonymously</div>
                <div style={{fontSize:"0.7rem",color:"hsl(var(--muted-foreground))"}}>Your name will be hidden from the recipient</div>
              </div>
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <button onClick={() => setShowForm(false)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"8px",padding:"10px 24px",color:"hsl(var(--foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Submit Feedback</button>
              <button onClick={() => setShowForm(false)} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"10px 24px",color:"hsl(var(--muted-foreground))",cursor:"pointer",fontSize:"0.875rem"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
        {feedbacks.map(fb => {
          const rc = relationConfig[fb.relation];
          return (
            <div key={fb.id} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"16px",padding:"20px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"12px",flexWrap:"wrap",gap:"8px"}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"}}>
                    <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{fb.from}</span>
                    <span style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>→</span>
                    <span style={{fontSize:"0.875rem",fontWeight:500,color:"hsl(var(--foreground))"}}>{fb.to}</span>
                    <span style={{fontSize:"0.7rem",padding:"2px 8px",borderRadius:"999px",background:rc.bg,color:rc.color}}>{fb.relation}</span>
                  </div>
                  <div style={{fontSize:"0.75rem",color:"hsl(var(--muted-foreground))"}}>{fb.date}</div>
                </div>
                <div style={{display:"flex",gap:"2px"}}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{fontSize:"0.875rem"}}>{s<=fb.rating?"⭐":"☆"}</span>)}
                </div>
              </div>
              <p style={{fontSize:"0.875rem",color:"hsl(var(--muted-foreground))",lineHeight:"1.6",fontStyle:"italic"}}>"{fb.comment}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
