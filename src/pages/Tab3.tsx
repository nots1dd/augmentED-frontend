import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
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
        <ExploreContainer name="Similarity Search" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
