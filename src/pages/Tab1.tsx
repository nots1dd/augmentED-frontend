import { IonButton, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  const handleEnter = () => {
    // Handle the "Enter" action here
    console.log('Input Value:', inputValue);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color={'medium'}>augmentED-Chatbot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">augmentED-Chatbot</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Chatbot" />
        <IonContent>
          <IonCardHeader>
            <IonCardContent>
              <IonToast isOpen= {showToast} onWillDismiss={handleToastClose} message={"ok"} duration={1000} className='small-fac'></IonToast>
              <IonInput className='small-input' fill='outline' placeholder='Enter your text'></IonInput>
              <IonButton color= {"tertiary"} className='small-enter-button-input' onClick={handleShowToast}>
                Enter
              </IonButton>
            </IonCardContent>
          </IonCardHeader>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
