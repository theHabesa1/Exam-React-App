
 import style from "./Home.module.css";
 import {NavLink} from "react-router-dom";


    
    function Home(){
        return(
            <>
               <div id={style.header}>
                   <div id={style.headerHeadingBox}>
                        <h3>ፈተና</h3> 
                    </div>
                </div>
            
              <div id={style.typewriter}>
                    <h1>Welcome to ፈትና com</h1>
              </div>


              <div id={style.div2}>
            
                  <div className ={style.div3}>
                     <NavLink exact  to="/StudentLogin">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="250" height="250" class="illustration"><g id="Layer_10" data-name="Layer 10"><polygon points="110.59 129 156.55 66.4 307.63 62.01 353.65 137.89 316.89 137.89 314.38 164.66 173.58 169.37 172.89 141.67 110.59 129" fill="#E0DBDA"></polygon><rect x="370.37" y="197.64" width="15.68" height="42.08" rx="7.15" fill="#E0DBDA"></rect><path d="M108.6,462.09H334s7.59-72.26-18.17-107.49l-69.13,53.75-93.47-75.46S92.59,359.71,108.6,462.09Z" fill="#E0DBDA"></path></g><g id="Layer_3" data-name="Layer 3"><path d="M242.48,341.8a36.39,36.39,0,0,1-36.35-36.34v-25.1a7,7,0,0,1,14,0v25.1a22.35,22.35,0,0,0,44.7,0v-25.1a7,7,0,0,1,14,0v25.1A36.39,36.39,0,0,1,242.48,341.8Z" fill="#E0DBDA"></path><path d="M241.2,287.36a77.69,77.69,0,0,1-77.6-77.6V176.37a7,7,0,0,1,14,0v33.39a63.61,63.61,0,0,0,127.21,0V176.37a7,7,0,0,1,14,0v33.39A77.69,77.69,0,0,1,241.2,287.36Z" fill="#E0DBDA"></path><path d="M368.23,467.38a7,7,0,0,1-7-6.79l-2.17-72.46c0-.2,0-.39,0-.59.56-10.13-4.9-32.9-21.92-50.89-16-16.9-38-25.47-65.33-25.47a7,7,0,0,1,0-14c30.91,0,57,10.32,75.49,29.85,20,21.15,26.35,47.9,25.76,61l2.16,72.18a7,7,0,0,1-6.79,7.2Z" fill="#E0DBDA"></path><path d="M107.93,462.09a7,7,0,0,1-7-7V397.31c0-26.47,11.83-51.71,33.3-71.05,20.51-18.48,47.57-29.08,74.25-29.08a7,7,0,0,1,0,14c-49.83,0-93.55,40.25-93.55,86.13v57.78A7,7,0,0,1,107.93,462.09Z" fill="#E0DBDA"></path><path d="M237.41,243.89a7,7,0,0,1-7-7V210.8a7,7,0,0,1,14,0v26.09A7,7,0,0,1,237.41,243.89Z" fill="#E0DBDA"></path><path d="M245.46,416.22a7,7,0,0,1-4.49-1.63l-99.82-83.32a7,7,0,0,1,9-10.75l95.11,79.39,86-79.17a7,7,0,0,1,9.48,10.31L250.2,414.37A7,7,0,0,1,245.46,416.22Z" fill="#E0DBDA"></path><path d="M311.65,178.66h-141a7,7,0,0,1-7-7V136a7,7,0,0,1,7-7h141a7,7,0,0,1,7,7v35.66A7,7,0,0,1,311.65,178.66Zm-134-14h127V143h-127Z" fill="#E0DBDA"></path><path d="M378.76,143H101.48a7,7,0,0,1-5.79-10.93l52-76.6a7,7,0,0,1,5.79-3.07H326.24A7,7,0,0,1,332,55.45L384.53,132a7,7,0,0,1-5.77,11ZM114.69,129H365.47L322.55,66.4H157.18Z" fill="#E0DBDA"></path><path d="M378.76,197.64a7,7,0,0,1-7-7V136a7,7,0,0,1,14,0v54.64A7,7,0,0,1,378.76,197.64Z" fill="#E0DBDA"></path><path d="M393.05,248.19H365a7,7,0,0,1-7-7V207.11a21,21,0,1,1,42.08,0v34.08A7,7,0,0,1,393.05,248.19Zm-21.08-14h14.08V207.11a7,7,0,1,0-14.08,0Z" fill="#E0DBDA"></path></g></svg>
                        <span>Student</span>
                     </NavLink>
                  </div>

                  <div  className ={style.div4}>
                    <NavLink  to="/AdminLogin">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="250" height="250" class="illustration"><title>32. User</title><g id="Layer_9" data-name="Layer 9"><path d="M250.85,381.13q15.21,1.22,30.49,1.62c1.5-1.78.92-4.45.26-6.68q-4.86-16.54-9.73-33.09c-1.15-3.92-2.17-8.6.46-11.73,1.89-2.24,7-3.81,6.37-7.5-.47-2.87-4.83-4.1-7.27-4-6.47.3-9.43,6.86-9.47,12.58,0,3.65,1.39,6.94.94,10.63-.5,4.1-2.55,8.39-3.8,12.32C258.35,357.63,251.78,381.21,250.85,381.13Z" fill="#3fe2fd"></path><circle cx="107.8" cy="66.61" r="14.36" fill="#3fe2fd"></circle><path d="M85,108V407s-1.69,50.68,87.84,45.61c0,0-106.43,16.89-118.25-30.41V104.62Z" fill="#3fe2fd"></path></g><g id="Layer_3" data-name="Layer 3"><path d="M267.06,308.13a9.25,9.25,0,0,0,9.24-9.24v-7.17a41.32,41.32,0,0,1-4.74.28H261.14c-1.12,0-2.23-.06-3.32-.15v7A9.24,9.24,0,0,0,267.06,308.13Z" fill="none"></path><path d="M241.69,322.86l10.17-6.41a23.27,23.27,0,0,1-7.18-11.29l-.54,0c-.67,0-1.32,0-2,.05Z" fill="none"></path><path d="M318.92,315.39a30.53,30.53,0,0,0-12.81-7.92l-.76,26.23a7,7,0,0,1-10.54,5.83l-10.36-6.08-1.54,2.39,8.56,44h38.37a7.67,7.67,0,0,1-.18-1.36l-1.2-33.74a4.58,4.58,0,0,1,0-.64C328.57,342.34,329.14,326.19,318.92,315.39Z" fill="none"></path><path d="M199.59,349.73v30.15h42.75l11.08-43.68-1.65-3.14-13.68,8.64a7,7,0,0,1-10.74-6.11l.73-27.4A44.61,44.61,0,0,0,199.59,349.73Z" fill="none"></path><path d="M289.45,305.11a23.23,23.23,0,0,1-6.84,11l9.09,5.33.47-16.26c-.57,0-1.14,0-1.72,0A8.26,8.26,0,0,1,289.45,305.11Z" fill="none"></path><path d="M256.78,379.88h20.43l-8.58-44.14a7,7,0,0,1,1-5.14l2.75-4.24-5.18-3-3.55,2.24,3.42,6.49a7,7,0,0,1,.59,5Z" fill="none"></path><path d="M163,381.17h22.64V349.73a58.61,58.61,0,0,1,58.23-58.54v-3.05a40.91,40.91,0,0,1-23.54-37v-21.9a7,7,0,0,1-2-2.45,48.49,48.49,0,0,0-4.12-6.49c-3.22-4.5-6.85-9.6-7.44-17l-.12-1.58c-1-11.73-2.41-29.46,10.06-36.61,2.61-1.49,6.31-2,13.58-2.78,1.84-.2,4.36-.47,5.07-.64a62.62,62.62,0,0,0,10.89-4.48c5.3-2.58,10.79-5.24,17.57-6.3,13.3-2.07,26.21-1.07,37.35,2.89,9.24,3.3,16.73,8.51,21.65,15.09a44.1,44.1,0,0,1,7.89,19.62A39.32,39.32,0,0,1,330,206c-1.92,6.53-5.66,10.05-9.28,13.46l-.54.51a43.13,43.13,0,0,0-5.3,6.9c-.78,1.16-1.59,2.33-2.42,3.49v20.78a40.88,40.88,0,0,1-22.13,36.29v3.76h.15c16.48,0,29.48,4.91,38.64,14.59,13.59,14.37,13.58,34.15,13.37,38.81L343.65,378a6.89,6.89,0,0,1-.63,3.15h19.05V145.67H163Z" fill="none"></path><path d="M418,43H96.67A35.12,35.12,0,0,0,61.59,78.09V99.18H453V78.09A35.12,35.12,0,0,0,418,43ZM108.19,87.84a18.7,18.7,0,1,1,18.7-18.69A18.71,18.71,0,0,1,108.19,87.84Z" fill="none"></path><circle cx="108.19" cy="69.15" r="4.7" fill="none"></circle><path d="M61.59,113.18V415a35.13,35.13,0,0,0,35.08,35.09H418A35.13,35.13,0,0,0,453,415V113.18ZM331.38,425.06H191a7,7,0,0,1,0-14H331.38a7,7,0,0,1,0,14Zm44.69-36.89a7,7,0,0,1-7,7H156a7,7,0,0,1-7-7V138.67a7,7,0,0,1,7-7H369.07a7,7,0,0,1,7,7Z" fill="none"></path><path d="M261.14,278h10.42a26.9,26.9,0,0,0,26.87-26.86V229.31a6.89,6.89,0,0,1,0-2.31V212H234.28v39.17A26.89,26.89,0,0,0,261.14,278Zm1.15-51a7,7,0,0,1,9.76,1.64,22.73,22.73,0,0,1,3.21,7.53l1.3,4.73a12.57,12.57,0,0,1,.42,6,9,9,0,0,1-8.69,7.35H268a7,7,0,0,1-5.37-11.19l-.87-3.17a12.92,12.92,0,0,0-1.11-3.12A7,7,0,0,1,262.29,227Zm-13.93,33.94a7,7,0,0,1,8.87-4.4,31.2,31.2,0,0,0,17.78.57,7,7,0,0,1,3.6,13.53,45.36,45.36,0,0,1-25.85-.83A7,7,0,0,1,248.36,260.94Z" fill="none"></path><path d="M312.43,205v3c2.26-2.2,3.42-3.61,4.11-6a25.66,25.66,0,0,0,.31-11.25,30.52,30.52,0,0,0-5.29-13.47c-4.13-5.52-10.51-8.64-15.13-10.29-8.95-3.18-19.5-4-30.5-2.25-4.71.74-9,2.84-13.62,5.06a73.79,73.79,0,0,1-13.4,5.42,52.93,52.93,0,0,1-7.2,1,74.43,74.43,0,0,0-8.33,1.16c-4.47,3-3.41,16.1-2.83,23.18l.13,1.61c0,.1,0,.19,0,.29a7,7,0,0,1,6.56-4.56h78.15A7,7,0,0,1,312.43,205Z" fill="none"></path><path d="M418,29H96.67A49.14,49.14,0,0,0,47.59,78.09V415a49.14,49.14,0,0,0,49.08,49.09H418A49.14,49.14,0,0,0,467,415V78.09A49.14,49.14,0,0,0,418,29Zm0,421H96.67A35.13,35.13,0,0,1,61.59,415V113.18H453V415A35.13,35.13,0,0,1,418,450.05ZM453,99.18H61.59V78.09A35.12,35.12,0,0,1,96.67,43H418A35.12,35.12,0,0,1,453,78.09Z" fill="#E0DBDA"></path><path d="M108.19,50.45a18.7,18.7,0,1,0,18.7,18.7A18.71,18.71,0,0,0,108.19,50.45Zm0,23.39a4.7,4.7,0,1,1,4.7-4.69A4.69,4.69,0,0,1,108.19,73.84Z" fill="#E0DBDA"></path><path d="M331.38,411.06H191a7,7,0,0,0,0,14H331.38a7,7,0,0,0,0-14Z" fill="#E0DBDA"></path><path d="M261.76,239.88l.87,3.17A7,7,0,0,0,268,254.24h.29a9,9,0,0,0,8.69-7.35,12.57,12.57,0,0,0-.42-6l-1.3-4.73a22.73,22.73,0,0,0-3.21-7.53,7,7,0,1,0-11.4,8.12A12.92,12.92,0,0,1,261.76,239.88Z" fill="#E0DBDA"></path><path d="M252.76,269.81a45.36,45.36,0,0,0,25.85.83,7,7,0,0,0-3.6-13.53,31.2,31.2,0,0,1-17.78-.57,7,7,0,1,0-4.47,13.27Z" fill="#E0DBDA"></path><path d="M369.07,131.67H156a7,7,0,0,0-7,7v249.5a7,7,0,0,0,7,7H369.07a7,7,0,0,0,7-7V138.67A7,7,0,0,0,369.07,131.67ZM227.28,198a7,7,0,0,0-6.56,4.56c0-.1,0-.19,0-.29l-.13-1.61c-.58-7.08-1.64-20.15,2.83-23.18a74.43,74.43,0,0,1,8.33-1.16,52.93,52.93,0,0,0,7.2-1,73.79,73.79,0,0,0,13.4-5.42c4.58-2.22,8.91-4.32,13.62-5.06,11-1.71,21.55-.93,30.5,2.25,4.62,1.65,11,4.77,15.13,10.29a30.52,30.52,0,0,1,5.29,13.47,25.66,25.66,0,0,1-.31,11.25c-.69,2.35-1.85,3.76-4.11,6v-3a7,7,0,0,0-7-7Zm7,14h64.15v15a6.89,6.89,0,0,0,0,2.31v21.83A26.9,26.9,0,0,1,271.56,278H261.14a26.89,26.89,0,0,1-26.86-26.86Zm95.38,166.55a7.67,7.67,0,0,0,.18,1.36H291.47l-8.56-44,1.54-2.39,10.36,6.08a7,7,0,0,0,10.54-5.83l.76-26.23a30.53,30.53,0,0,1,12.81,7.92c10.22,10.8,9.65,26.95,9.55,28.75a4.58,4.58,0,0,0,0,.64Zm-62.6-46.46-3.42-6.49,3.55-2.24,5.18,3-2.75,4.24a7,7,0,0,0-1,5.14l8.58,44.14H256.78L267.65,337A7,7,0,0,0,267.06,332.06Zm24.64-10.59-9.09-5.33a23.23,23.23,0,0,0,6.84-11,8.26,8.26,0,0,0,1,.07c.58,0,1.15,0,1.72,0ZM261.14,292h10.42a41.32,41.32,0,0,0,4.74-.28v7.17a9.24,9.24,0,0,1-18.48,0v-7C258.91,291.94,260,292,261.14,292Zm-17,13.18.54,0a23.27,23.27,0,0,0,7.18,11.29l-10.17,6.41.47-17.63C242.82,305.21,243.47,305.18,244.14,305.18Zm-13.25,36.68a7,7,0,0,0,7.2-.16l13.68-8.64,1.65,3.14-11.08,43.68H199.59V349.73a44.61,44.61,0,0,1,28.49-41.54l-.73,27.4A7,7,0,0,0,230.89,341.86Zm131.18,39.31H343a6.89,6.89,0,0,0,.63-3.15l-1.19-33.44c.21-4.66.22-24.44-13.37-38.81-9.16-9.68-22.16-14.59-38.64-14.59h-.15v-3.76a40.88,40.88,0,0,0,22.13-36.29V230.36c.83-1.16,1.64-2.33,2.42-3.49a43.13,43.13,0,0,1,5.3-6.9l.54-.51c3.62-3.41,7.36-6.93,9.28-13.46a39.32,39.32,0,0,0,.69-17.45,44.1,44.1,0,0,0-7.89-19.62c-4.92-6.58-12.41-11.79-21.65-15.09-11.14-4-24.05-5-37.35-2.89-6.78,1.06-12.27,3.72-17.57,6.3a62.62,62.62,0,0,1-10.89,4.48c-.71.17-3.23.44-5.07.64-7.27.76-11,1.29-13.58,2.78-12.47,7.15-11,24.88-10.06,36.61l.12,1.58c.59,7.36,4.22,12.46,7.44,17a48.49,48.49,0,0,1,4.12,6.49,7,7,0,0,0,2,2.45v21.9a40.91,40.91,0,0,0,23.54,37v3.05a58.61,58.61,0,0,0-58.23,58.54v31.44H163V145.67H362.07Z" fill="#E0DBDA"></path></g></svg>
                       <span>Admin</span>
                     </NavLink> 
                  </div>
                
              </div>


             

            </>
        );
    }

     

    export default Home;