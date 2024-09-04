function toggleAnswer(questionElement) {
    const faqItem = questionElement.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    
    // Toggle the active class on the FAQ item
    faqItem.classList.toggle('active');
    
    // Animate the answer visibility
    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand
        questionElement.querySelector('.toggle-icon').textContent = '−'; // Change to minus
    } else {
        answer.style.maxHeight = '0'; // Collapse
        questionElement.querySelector('.toggle-icon').textContent = '+'; // Change to plus
    }
}
