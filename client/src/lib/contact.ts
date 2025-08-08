interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const submitToGoogleSheets = async (data: ContactForm) => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyh-ad0Khn-4S9MdDRpx8P_8aTRNQqOUU0qxchZSIC_cIMWhlO7uKC9WzIu2ICNsJGqvg/exec';
  
  try {
    const formData = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('timestamp', new Date().toISOString());

    const response = await fetch(`${SCRIPT_URL}?${formData.toString()}`, {
      method: 'GET',
      mode: 'no-cors'
    });

    // Since we can't read the response in no-cors mode,
    // we'll consider it successful if we get here
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false };
  }
};
