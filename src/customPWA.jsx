import React, { useState, useEffect } from 'react';

const CustomPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      console.log("beforeinstallprompt",e)
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the custom install prompt
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show the native install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA install prompt');
    } else {
      console.log("else case")
      // console.log('User dismissed the PWA install prompt');
    }

    // Reset the deferred prompt variable
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="install-banner">
      {/* <p>Install this app for a better experience</p> */}
      <button onClick={handleInstallClick}>Install</button>
    </div>
  );
};

export default CustomPWA;
