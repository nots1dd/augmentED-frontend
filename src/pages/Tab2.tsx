import { IonButton, IonCardHeader, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          <IonTitle className='logo2'>augmentED-Note Maker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">augmentED-Note Maker</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <IonCardHeader>
      <IonToast isOpen= {showToast} onWillDismiss={handleToastClose} message={"ok"} duration={1000} className='small-fac'></IonToast>
      <IonInput className='small-input' fill= "outline" placeholder='Enter your text'></IonInput>
      <IonButton color= {"tertiary"} className='small-enter-button-input' onClick={handleShowToast}>
        Enter
        </IonButton>

      </IonCardHeader>
      <IonContent className='ai-dialogue2-input'>
        <h1>AI-Notemaker</h1>
        <p>LLM generated notes will be here</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
