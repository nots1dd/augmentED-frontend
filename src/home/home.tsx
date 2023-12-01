// import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
// import React, { useRef } from 'react';
// import { useHistory } from 'react-router';
// import './Home.css';



// const Home: React.FC = () => {
  
//   const handleUploadClick = () => {
//     // Trigger the file input when the "Upload Book" button is clicked
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // Handle file selection here
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) {
//       console.log('Selected File:', selectedFile);
//       // Perform upload logic or any other processing
//     }
//   };

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const history = useHistory();
//   const handleClick = () => {
//     // Navigate to the desired route upon button click
//     history.push('/detail/1'); // Replace with your desired route
//   };

//   return (
    
//     <IonPage >
//       <IonHeader>
//         <IonToolbar color='dark'>
//           <IonButtons slot="start">
            
//           </IonButtons>
//           <IonTitle className='logo'>AugmentED</IonTitle>
//           <IonButtons slot="end">
//             <IonButton onClick={handleUploadClick} shape='round' fill='solid' color='success' style={{ '--padding-start': '20px', '--padding-end': '20px'
//           }}>
//               Upload Book
//             </IonButton>
            
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>

//       <IonContent className="center-content" color='primary'>
      
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: 'none' }} // Hide the file input
//           onChange={handleFileChange}
//         />
//         <IonSearchbar placeholder="Search..." className="search"/>
        
//       </IonContent>

//     </IonPage>
//   );
// };

// export default Home;