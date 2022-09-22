
   
   import style from "../StudentDashboard.module.css";

     import {useState , useEffect} from "react";
     import axios from "axios";

     import {NavLink} from "react-router-dom";
  

     function Subject(){

          const [allSubject , setAllSubject] = useState([]);

          useEffect(() => {
              async function getAllSubject(){
                  let value = await axios.get("http://localhost:3333/subject");
                  setAllSubject(value.data);
              }
              getAllSubject();
          },[])


         return (
               <>
                  <div id={style.displayBoxHeadingBox}>
                       <h1>Choose Subjects</h1>
                  </div>

                  {
                      allSubject.map((data , i) => {
                          return (
                              <div id={style.displayBoxSubjectBox} key={i}>

                                 <div id={style.subjectText}>
                                     <span>{data.subject_name}</span>
                                 </div>

                                <div id={style.subjectButton}>
                                     <NavLink exact to={`/StudentDashboard/Exam/${data.subject_name}`}> 
                                       <button className="btn">
                                            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                            </svg>
                                        <span>Go to Exam </span>
                                        
                                        </button>
                                     </NavLink>
                                </div>
                           </div>
                          );
                      })
                  }
               </>
         );
     }

    export default Subject;