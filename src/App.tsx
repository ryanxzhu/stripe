function App() {
    const card =
        'flex flex-col items-center border rounded-2xl w-80 p-4 sm:mx-2 mx-auto mt-3 shadow';
    return (
        <div className="flex flex-col sm:flex-row max-w-[1024px] mx-auto text-slate-800">
            <section className={card}>
                <h2 className="text-lg text-center">Work Permit Consultation</h2>
                <h1 className="text-2xl">US$189</h1>
                <a
                    href="https://buy.stripe.com/test_3cs9BA5Zw3GG6jK5kk"
                    className="bg-blue-600 rounded px-6 py-2 m-4 text-white hover:bg-blue-700"
                >
                    Pay
                </a>
            </section>
            <section className={card}>
                <h2 className="text-lg text-center">Notary Services</h2>
                <h1 className="text-2xl">US$79</h1>
                <a
                    href="https://buy.stripe.com/test_cN2bJIcnUdhgbE4dQR"
                    className="bg-blue-600 rounded px-6 py-2 m-4 text-white hover:bg-blue-700"
                >
                    Pay
                </a>
            </section>
            <section className={card}>
                <h2 className="text-lg text-center">Permanent Resident Consultation</h2>
                <h1 className="text-2xl">US$249</h1>
                <a
                    href="https://buy.stripe.com/test_6oE3dcgEafpoeQgdQS"
                    className="bg-blue-600 rounded px-6 py-2 m-4 text-white hover:bg-blue-700"
                >
                    Pay
                </a>
            </section>
        </div>
    );
}

export default App;
