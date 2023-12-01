import { IonButton, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { arrowBackCircle, arrowForwardCircle } from 'ionicons/icons';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([])
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };


  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

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
          <IonTitle className='logo1'>augmentED-Chatbot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className='logo1'>augmentED-Chatbot</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Chatbot" />
        <IonContent>
          <IonCardHeader>
            <IonCardContent>
              <IonToast isOpen= {showToast} onWillDismiss={handleToastClose} message={"ok"} duration={1000} className='small-fac'></IonToast>
              <IonInput className='small-input' fill= "outline" placeholder='Enter your text'></IonInput>
              <IonButton color= {"tertiary"} className='small-enter-button-input' onClick={handleShowToast}>
                Enter
              </IonButton>
              <Document className= "document-input" file="src\assets\CalcMATLAB-DA3.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => {
                console.log(err)
              }}>
                <Page pageNumber={currentPage} />
              <IonButton className='pdf-operators-prevpage-input' onClick={handlePrevPage} disabled={currentPage===1}>
                <IonIcon icon= {arrowBackCircle}>
                </IonIcon>
              </IonButton>
              <IonButton className='pdf-operators-nextpage-input' onClick={handleNextPage} disabled={currentPage===numPages}>
                <IonIcon icon= {arrowForwardCircle}></IonIcon>
              </IonButton>
              <p className='pdf-operators-currpage-input' color='primary'>Page: {currentPage}</p>
              </Document>
            </IonCardContent>
            <IonContent className='ai-dialogue-input'>
              <h1>AI-Dialogue Box</h1>
              <p>LLM output will be here</p>
            </IonContent>
          </IonCardHeader>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
