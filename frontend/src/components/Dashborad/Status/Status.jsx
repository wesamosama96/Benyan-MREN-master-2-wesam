import styles from "./Status.module.css";

function Status() {
  const cards = [
    { icon: "fa-building", counter: 120, title: "Projects" },
    { icon: "fa-users", counter: 150, title: "Users" },
    { icon: "fa-code", counter: 200, title: "Developers" },
    { icon: "fa-newspaper", counter: 50, title: "Blogs" },
  ];

  return (
    <section className="py-4">
      <div className="container-fluid px-4">
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-12 col-md-3" key={index}>
              <div className={`${styles.cardStatus} d-flex align-items-center justify-content-center gap-3`}>
                {/* Icon */}
                <div className={styles.icon}>
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                {/* Info */}
                <div className={`${styles.info} d-flex flex-column`}>
                  <span className={styles.counter}>{card.counter}</span>
                  <span className={styles.title}>{card.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Status;