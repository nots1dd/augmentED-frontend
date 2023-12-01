import { IonButton, IonCardHeader, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>augmentED-Similarity Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">augmentED-Similarity Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCardHeader>
      <IonToast isOpen= {showToast} onWillDismiss={handleToastClose} message={"ok"} duration={1000} className='small-fac'></IonToast>
      <IonInput className='small-input' fill= "outline" placeholder='Enter your text'></IonInput>
      <IonButton color= {"tertiary"} className='small-enter-button-input' onClick={handleShowToast}>
        Enter
        </IonButton>
      </IonCardHeader>
      <IonContent className='ai-dialogue3-input'>
        <h1>Similarity Search Box here</h1>
        <p>LLM output of all the searches will be here</p>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
