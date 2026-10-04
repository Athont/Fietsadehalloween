/**
 * ===================================================================
 * FIESTA DE LOS MUERTOS - SISTEMA INTERACTIVO & TERMINAL DE ACCESO
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const promoInput = document.getElementById('promoInput');
    const btnApplyCode = document.getElementById('btnApplyCode');
    const promoMsg = document.getElementById('promoMsg');
    const displayPrice = document.getElementById('displayPrice');
    const ticketForm = document.getElementById('ticketForm');
    
    // Modal
    const paymentModal = document.getElementById('paymentModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modalFinishBtn = document.getElementById('modalFinishBtn');
    const modalUserName = document.getElementById('modalUserName');
    const modalUserEmail = document.getElementById('modalUserEmail');
    const modalFinalPrice = document.getElementById('modalFinalPrice');
    const modalTicketId = document.getElementById('modalTicketId');

    // Estado del ticket
    let isDiscountApplied = false;
    let basePrice = 185;
    let discountPrice = 135;

    // 1. Manejo del efecto de Scroll en la Barra de Navegación
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Toggle del Menú Móvil
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('mobile-open')) {
                icon.className = 'ph ph-x';
            } else {
                icon.className = 'ph ph-list';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'ph ph-list';
            });
        });
    }

    // 3. Lógica para aplicar el Código de Afiliado / Creador
    function applyPromoCode() {
        const code = promoInput.value.trim().toUpperCase();

        if (!code) {
            promoMsg.textContent = 'Ingresa un código de creador para aplicar el beneficio.';
            promoMsg.className = 'promo-feedback-msg error';
            return;
        }

        // Simulación: cualquier código mayor a 3 caracteres se considera válido
        if (code.length >= 4) {
            isDiscountApplied = true;
            displayPrice.innerHTML = `<span class="original-price-strike">$${basePrice}</span>$${discountPrice}`;
            displayPrice.classList.add('discounted');

            promoMsg.textContent = `[AUTORIZADO] Código "${code}" verificado. Descuento de $50 MXN aplicado.`;
            promoMsg.className = 'promo-feedback-msg success';

            promoInput.style.borderColor = 'var(--color-cherry)';
            promoInput.style.color = 'var(--color-cherry)';
        } else {
            isDiscountApplied = false;
            displayPrice.innerHTML = `$${basePrice}`;
            displayPrice.classList.remove('discounted');

            promoMsg.textContent = 'Error: Código no reconocido o expirado en el mainframe.';
            promoMsg.className = 'promo-feedback-msg error';

            promoInput.style.borderColor = 'var(--color-cherry)';
            promoInput.style.color = '#FFFFFF';
        }
    }

    if (btnApplyCode) {
        btnApplyCode.addEventListener('click', applyPromoCode);
    }

    if (promoInput) {
        promoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyPromoCode();
            }
        });
    }

    // 4. Procesamiento del Formulario e Inicio del Protocolo de Pago
    if (ticketForm) {
        ticketForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');

            const userName = nameInput.value.trim();
            const userEmail = emailInput.value.trim();

            if (!userName || !userEmail) {
                alert('Por favor completa todos los campos del protocolo de acceso.');
                return;
            }

            // Generar ID de transacción aleatorio estilo Cyberpunk
            const randomCode = 'FDM-' + Math.floor(100000 + Math.random() * 900000);
            const activePrice = isDiscountApplied ? `$${discountPrice} MXN` : `$${basePrice} MXN`;

            // Rellenar datos del modal
            if (modalUserName) modalUserName.textContent = userName;
            if (modalUserEmail) modalUserEmail.textContent = userEmail;
            if (modalFinalPrice) modalFinalPrice.textContent = activePrice;
            if (modalTicketId) modalTicketId.textContent = randomCode;

            // Abrir Modal
            openModal();
        });
    }

    // Funciones del Modal
    function openModal() {
        if (paymentModal) {
            paymentModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (paymentModal) {
            paymentModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', closeModal);
    }

    if (modalFinishBtn) {
        modalFinishBtn.addEventListener('click', () => {
            alert('¡Protocolo finalizado! Tus credenciales de acceso han sido enviadas a tu correo electrónico.');
            closeModal();
            if (ticketForm) ticketForm.reset();
            isDiscountApplied = false;
            displayPrice.innerHTML = `$${basePrice}`;
            displayPrice.classList.remove('discounted');
            promoMsg.textContent = 'Si tienes un código de creador, aplícalo para un descuento de $50 MXN.';
            promoMsg.className = 'promo-feedback-msg';
            if (promoInput) {
                promoInput.style.borderColor = 'rgba(111, 117, 203, 0.3)';
                promoInput.style.color = '#FFFFFF';
            }
        });
    }

    // Cerrar modal al hacer clic en el backdrop exterior
    if (paymentModal) {
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                closeModal();
            }
        });
    }
});
