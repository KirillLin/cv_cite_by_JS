import { useState } from 'react';
import './App.css';

function App() {
  const [lang, setLang] = useState('ru');

  const data = {
    ru: {
      name: 'Иван Иванов',
      role: 'Инженер-системотехник · БГУИР',
      city: 'Минск, Беларусь',
      about: 'Студент 4 курса БГУИР, кафедра ЭВМ (КСиС). Ищу распределение в IT. Интересуюсь сопровождением ПО и системным анализом. Проходил производственную практику в ЕРИП.',
      skills: {
        strong: ['SQL', 'Python', 'C++', 'Linux', 'Git'],
        basic: ['React', 'HTML/CSS', 'Сети (TCP/IP)', 'BPMN/UML'],
      },
      experience: [
        {
          title: 'Производственная практика',
          company: 'ЕРИП',
          period: '2026',
          points: [
            'Ознакомился с архитектурой платёжной системы',
            'Изучил документооборот и взаимодействие отделов',
            'Работал с внутренними регламентами',
          ],
        },
      ],
      projects: [
        {
          title: 'Сайт-резюме на React',
          desc: 'Одностраничное резюме с поддержкой двух языков и адаптивной вёрсткой.',
          stack: 'React, Vite, CSS',
        },
      ],
      education: {
        uni: 'БГУИР',
        dept: 'Кафедра ЭВМ (КСиС)',
        years: '2022–2026',
      },
      contacts: {
        email: 'ivan@example.com',
        telegram: '@ivan',
        github: 'github.com/ivan',
      },
      download: 'Скачать PDF',
      sections: {
        about: 'О себе',
        skills: 'Навыки',
        experience: 'Опыт',
        projects: 'Проекты',
        education: 'Образование',
        strong: 'Уверенно',
        basic: 'Базово',
      },
    },
    en: {
      name: 'Ivan Ivanov',
      role: 'Computer Systems Engineer · BSUIR',
      city: 'Minsk, Belarus',
      about: '4th year student at BSUIR, Computer Engineering Department. Looking for a full-time position in IT. Interested in software support and system analysis. Completed internship at ERIP.',
      skills: {
        strong: ['SQL', 'Python', 'C++', 'Linux', 'Git'],
        basic: ['React', 'HTML/CSS', 'Networking (TCP/IP)', 'BPMN/UML'],
      },
      experience: [
        {
          title: 'Internship',
          company: 'ERIP',
          period: '2026',
          points: [
            'Familiarized with payment system architecture',
            'Studied document flow and department interaction',
            'Worked with internal regulations',
          ],
        },
      ],
      projects: [
        {
          title: 'React CV Website',
          desc: 'Single-page CV with bilingual support and responsive layout.',
          stack: 'React, Vite, CSS',
        },
      ],
      education: {
        uni: 'BSUIR',
        dept: 'Computer Engineering Department',
        years: '2022–2026',
      },
      contacts: {
        email: 'ivan@example.com',
        telegram: '@ivan',
        github: 'github.com/ivan',
      },
      download: 'Download PDF',
      sections: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
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
          <h1>{t.name}</h1>
          <p className="role">{t.role}</p>
          <p className="city">{t.city}</p>
          <div className="contacts">
            <a href={`mailto:${t.contacts.email}`}>{t.contacts.email}</a>
            <a href={`https://t.me/${t.contacts.telegram.replace('@', '')}`}>{t.contacts.telegram}</a>
            <a href={`https://${t.contacts.github}`}>{t.contacts.github}</a>
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
          <h2>{t.sections.projects}</h2>
          {t.projects.map((p) => (
              <div key={p.title} className="project">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="stack">{p.stack}</p>
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