import { IonButton, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

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
              <Document className= "document-input" file="src\assets\CalcMATLAB-DA3.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={(err) => {
                console.log(err)
              }}>
                <Page pageNumber={currentPage} />
              <IonButton className='pdf-operators-prevpage-input' onClick={handlePrevPage} disabled={currentPage===1}>Prev Page</IonButton>
              <IonButton className='pdf-operators-nextpage-input' onClick={handleNextPage} disabled={currentPage===numPages}>Next Page</IonButton>
              <p className='pdf-operators-currpage-input' color='primary'>Page: {currentPage}</p>
              </Document>
            </IonCardContent>
          </IonCardHeader>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
