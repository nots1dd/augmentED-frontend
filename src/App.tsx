import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { albumsOutline, bookOutline, chatboxOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    {/* <Route exact path= "/augmentED-home" render={() => <Redirect to='/augmentED-home'/>}><Home></Home></Route> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/augmentED-Chatbot">
            <Tab1 />
          </Route>
          <Route exact path="/augmentED-NoteMaker">
            <Tab2 />
          </Route>
          <Route path="/augmentED-SimilaritySearch">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/augmentED-SimilaritySearch" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/augmentED-Chatbot">
            <IonIcon aria-hidden="true" icon={chatboxOutline} />
            <IonLabel>Chatbot</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/augmentED-NoteMaker">
            <IonIcon aria-hidden="true" icon={bookOutline} />
            <IonLabel>Note Maker</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/augmentED-SimilaritySearch">
            <IonIcon aria-hidden="true" icon={albumsOutline} />
            <IonLabel>Similarity Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
