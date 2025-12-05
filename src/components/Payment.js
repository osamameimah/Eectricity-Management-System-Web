const Payment = ()=>{
return(
    <>
    
    <section className="payment" id="payment">
        <div className="payment-container">
          <h2 className="section-title">طرق الدفع المتاحة</h2>
          <p className="section-subtitle">ادفع بالطريقة التي تناسبك</p>
          <div className="payment-grid">
            <div className="payment-card">
              <span>💳 Jawwal Pay</span>
            </div>
            <div className="payment-card">
              <span>💵 PalPay</span>
            </div>
            <div className="payment-card">
              <span>💰 نقداً</span>
            </div>
            <div className="payment-card">
              <span>🏦 بنك فلسطين</span>
            </div>
          </div>
        </div>
      </section>
    </>
)

}

export default Payment;