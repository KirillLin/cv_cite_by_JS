import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('ru');

  const data = {
    ru: {
      name: 'Линкевич Кирилл Олегович',
      role: 'Инженер-системотехник · БГУИР',
      city: 'Минск, Беларусь',
      about: 'Студент 4 курса БГУИР, кафедра ЭВМ (КСиС). Ищу распределение в IT. Интересуюсь разработкой, сопровождением ПО. Проходил производственную практику в ЕРИП.',
      skills: {
        strong: ['SQL', 'Java', 'Python', 'C++', 'Linux', 'Git'],
        basic: ['React', 'HTML/CSS', 'Сети (TCP/IP)', 'UML'],
      },
      experience: [
        {
          title: 'Производственная практика',
          company: 'ЕРИП',
          period: '2026',
          points: [
            'Ознакомился с принципом платёжной системы',
            'Изучил документооборот и взаимодействие отделов',
            'Работал с внутренними регламентами',
            'Написал прототип программы по обработке заявок',
          ],
        },
      ],
      education: {
        uni: 'БГУИР',
        dept: 'Кафедра ЭВМ (ФКСиС). Основные курсы - Программирование на языках высокого уровня, Базы данных, Основы компьютерный сетей, Администрирование компьютерных сетей, Оборудование компьютерных сетей, Жизненный цикл разработки ПО и др.',
        years: '2023–2027',
      },
      contacts: {
        email: 'kirilllinkevich005@gmail.com',
        telegram: '@Kulgai_zhurik',
        github: 'github.com/KirillLin',
      },
      download: 'Скачать PDF',
      sections: {
        about: 'О себе',
        skills: 'Навыки',
        experience: 'Опыт',
        education: 'Образование',
        strong: 'Уверенно',
        basic: 'Базово',
      },
    },
    en: {
      name: 'Kirill Linkevich',
      role: 'Computer Systems Engineer · BSUIR',
      city: 'Minsk, Belarus',
      about: '4th year student at BSUIR, Computer Engineering Department (FCSaS). Looking for a job placement in IT. Interested in software development and support. Completed an internship at ERIP.',
      skills: {
        strong: ['SQL', 'Java', 'Python', 'C++', 'Linux', 'Git'],
        basic: ['React', 'HTML/CSS', 'Networking (TCP/IP)', 'UML'],
      },
      experience: [
        {
          title: 'Internship',
          company: 'ERIP',
          period: '2026',
          points: [
            'Familiarized with the principles of the payment system',
            'Studied document flow and interaction between departments',
            'Worked with internal regulations',
            'Developed a prototype application for processing requests',
          ],
        },
      ],
      education: {
        uni: 'BSUIR',
        dept: 'Computer Engineering Department (FKSiS, EVM). Main coursesHigh-level language programming, Databases, Fundamentals of computer networks, Computer network administration, Computer network hardware, Software development life cycle, etc.' ,
        years: '2023–2027',
      },
      contacts: {
        email: 'kirilllinkevich005@gmail.com',
        telegram: '@Kulgai_zhurik',
        github: 'github.com/KirillLin',
      },
      download: 'Download PDF',
      sections: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        strong: 'Strong',
        basic: 'Basic',
      },
    },
  };

  const t = data[lang];

  return (
      <div className="cv">
        <header className="cv-header">
          <div className="lang-switch">
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
          </div>

          <div className="header-main">
            <div className="avatar">КО</div>
            <div>
              <h1>{t.name}</h1>
              <p className="role">{t.role}</p>
              <p className="city">{t.city}</p>
            </div>
          </div>

          <div className="contacts">
            <a href={`mailto:${t.contacts.email}`}>{t.contacts.email}</a>
            <a href={`https://t.me/${t.contacts.telegram.replace('@', '')}`} target="_blank" rel="noreferrer">{t.contacts.telegram}</a>
            <a href={`https://${t.contacts.github}`} target="_blank" rel="noreferrer">{t.contacts.github}</a>
          </div>
        </header>

        <section className="cv-section">
          <h2>{t.sections.about}</h2>
          <p>{t.about}</p>
        </section>

        <section className="cv-section">
          <h2>{t.sections.skills}</h2>
          <div className="skills">
            <div>
              <h3>{t.sections.strong}</h3>
              <ul>
                {t.skills.strong.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3>{t.sections.basic}</h3>
              <ul>
                {t.skills.basic.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2>{t.sections.experience}</h2>
          {t.experience.map((exp) => (
              <div key={exp.title} className="exp">
                <h3>{exp.title} — {exp.company}</h3>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>{t.sections.education}</h2>
          <p><strong>{t.education.uni}</strong> — {t.education.dept}</p>
          <p>{t.education.years}</p>
        </section>

        <footer className="cv-footer">
          <button onClick={() => window.print()}>{t.download}</button>
        </footer>
      </div>
  );
}

export default App;