import './Features.css';

function Features() {
    const features = [
        {
            icon: "🎯",
            title: "Персоналізовані рекомендації",
            description: "Ми аналізуємо ваші вподобання та пропонуємо аніме, яке точно вам сподобається"
        },
        {
            icon: "📱",
            title: "Сучасний інтерфейс",
            description: "Зручний та інтуїтивно зрозумілий дизайн, що працює на всіх пристроях"
        },
        {
            icon: "🎬",
            title: "Велика база аніме",
            description: "Постійно оновлювана колекція з сотнями аніме різних жанрів та років"
        }
    ];

    return (
        <div className="features" data-testid = "feature-component">
            <div className="container">
                <h2 className="section-title">Чому обирають <span>AnimeRec</span> ?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;