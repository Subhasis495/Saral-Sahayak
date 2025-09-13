document.addEventListener('DOMContentLoaded', () => {
            
            const processBtn = document.getElementById('process-btn');
            const outputContainer = document.getElementById('output-container');
            const documentViewer = document.getElementById('document-viewer');
            const scanLine = documentViewer.querySelector('.document-scan-line');

            processBtn.addEventListener('click', () => {
                outputContainer.innerHTML = `
                    <div class="text-center">
                        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                        <p class="mt-4 text-stone-600">Analyzing document...</p>
                    </div>
                `;
                scanLine.style.display = 'block';
                scanLine.style.animation = 'none';
                scanLine.offsetHeight; 
                scanLine.style.animation = 'scan 2s ease-in-out forwards';
                
                setTimeout(() => {
                    scanLine.style.display = 'none';
                    outputContainer.innerHTML = `
                        <div class="w-full h-full p-4 overflow-y-auto text-sm sm:text-base">
                            <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                <h4 class="font-bold text-blue-800">Simple Summary</h4>
                                <p class="mt-1 text-blue-900">This is your electricity bill for August.</p>
                            </div>
                            <div class="mt-4 bg-green-50 border border-green-200 p-4 rounded-lg">
                                <h4 class="font-bold text-green-800">Key Information</h4>
                                <ul class="mt-2 space-y-1">
                                    <li><strong>Amount Due:</strong> <span class="font-mono bg-green-200 text-green-900 px-2 py-1 rounded">₹1,250</span></li>
                                    <li><strong>Due Date:</strong> <span class="font-mono bg-red-200 text-red-900 px-2 py-1 rounded">25-Sep-2025</span></li>
                                </ul>
                            </div>
                             <div class="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <h4 class="font-bold text-yellow-800">What to Do Next</h4>
                                <ol class="mt-2 list-decimal list-inside text-yellow-900 space-y-1">
                                    <li>Pay online via the WBSEDCL website or at the local office.</li>
                                    <li>Pay before the due date to avoid a late fee.</li>
                                </ol>
                            </div>
                        </div>
                    `;
                }, 2000);
            });

            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.dataset.tab;
                    
                    tabButtons.forEach(btn => {
                        btn.classList.remove('text-blue-600', 'border-blue-600');
                        btn.classList.add('text-stone-500');
                    });
                    
                    button.classList.add('text-blue-600', 'border-blue-600');
                    button.classList.remove('text-stone-500');
                    
                    tabContents.forEach(content => {
                        if (content.id === tabId) {
                            content.classList.remove('hidden');
                        } else {
                            content.classList.add('hidden');
                        }
                    });
                });
            });

            const sections = document.querySelectorAll('.section-fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            sections.forEach(section => {
                observer.observe(section);
            });
        });