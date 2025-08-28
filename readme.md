1. ক। **getElementById** একটি পদ্ধতি যা কোনো html উপাদানকে তার id দিয়ে নির্বাচন করে।
   খ। **getElementsByClassName** একটি পদ্ধতি যা কোনো html উপাদানকে তার class দিয়ে নির্বাচন করে।
   গ। **querySelector** হলো এমন একটি পদ্ধতি যা css selector (.) অথবা (#) এর মাধ্যমে প্রথম selector টি নির্বাচন করে।
   ঘ। **querySelectorAll** হলো এমন একটি পদ্ধতি যা css selector (.) অথবা (#) এর মাধ্যমে সকল selector টি নির্বাচন করে।

2. **document.createElement()** এর মাধ্যমে নতুন element তৈরি করা যায় এবং **parent.appendChild()** এর মাধ্যমে নতুন element insert করা যায়।

3. **Event bubbling** child element এ ট্রিগার হওয়া event ধাপে ধাপে তার parent element হয়ে root পর্যন্ত পৌছে।

4. Event listener বসিয়ে child এ event হ্যান্ডেল করাই হলো **Event Delegetaion** আর এটা সহজে ইভেন্ট পরিচালনা করে, যা অধিক কার্যকর।

5. **preventDefault() & stopPropagation()** এর মূল পার্থক্য হলো একটি ব্রাউজারের ডিফল্ট কাজ বন্ধ করে আর একটি event এর উপরে ছড়ানো বন্ধ করে।
