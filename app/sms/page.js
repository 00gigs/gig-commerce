import React from 'react'

const page = () => {

  const getCurrentDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = String(today.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
  };

  return (
    <div className='grid justify-items-center border-2 py-5 border-black text-black min-h-screen'>
      <p className=' font-extrabold '>
      By submitting this form you agree to receive SMS from Harrington Cyber & Hanz Home Solutions LLC. Carrier and Data rates may apply. Message frequency may vary Reply STOP at any time to end messaging or Reply Help for more information or you can say any information entered on this page will not be used to initiate SMS.
      </p><br></br>
      <p className=' '>
 Harrington Cyber & Hanz Home Solutions LLC is committed to safeguarding the privacy of our users. We want to assure you that we do not share your personal information with third parties. This privacy policy outlines how we collect, use, and protect the information you provide to us. 

Information Collection: 

We collect only the information necessary to provide and improve our services. This may include name, email address, etc. We do not sell, rent, or share this information with any third parties. 

How We Use Your Information: 

The information collected is used solely for communicating with the intended party. We do not share your information with external parties for marketing or any other purposes. 

Your Choices: 

You have the right to access, correct, or delete your information. If you have any concerns or questions about your data, please contact us at [contact information or link]. 

Policy Changes: 

We may update our privacy policy from time to time. Any changes will be communicated to you, and your continued use of our services implies your acceptance of the updated policy. By using our services, you agree to the terms outlined in this privacy policy. 

Last updated:{getCurrentDate()}
      </p>
    </div>
  )
}

export default page
