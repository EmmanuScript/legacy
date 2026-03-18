import { useParams, Link } from "react-router-dom";
import "./NewsDetail.css";

function NewsDetail() {
  const { id } = useParams();

  const newsArticles = {
    1: {
      title: "The Importance of JAMB Tutorial: Key to University Success",
      date: "March 20, 2025",
      author: "Academic Team",
      image: "/legacy/ssce_and_jamb_tutorial.jpeg",
      content: `
        <p>As the 2026 JAMB examination season approaches, education experts at Krelis Legacy College are emphasizing the critical role that structured tutorial programs play in helping students secure admission into Nigerian universities. The Joint Admissions and Matriculation Board (JAMB) examination, which serves as the primary gateway to tertiary education in Nigeria, has become increasingly competitive, making adequate preparation more important than ever.</p>
        
        <p>Recent data from Krelis Legacy College reveals a striking difference in performance between students who attend structured JAMB tutorial classes and those who study independently. According to statistics compiled from the past three examination cycles, students enrolled in the school's JAMB tutorial program score an average of 35% higher than their peers who prepare on their own. Even more impressive, over 92% of tutorial participants achieve scores above 250 points, a threshold that significantly increases their chances of admission into competitive university programs.</p>
        
        <p>"The difference is remarkable," says Mr. Oluwaseun Kareem, Head of the JAMB Tutorial Department at Krelis Legacy College. "We've seen students transform from being uncertain about their prospects to confidently securing admission into their desired institutions. It's not just about teaching them the subjects—it's about teaching them how to take the examination."</p>
        
        <p>The tutorial program at Krelis Legacy College covers all four JAMB subjects with experienced teachers who are examination experts. The curriculum includes regular mock examinations designed to build student confidence, intensive computer-based test (CBT) practice sessions that mirror the actual examination environment, and comprehensive coverage of past questions with predicted topics. Small class sizes ensure that each student receives personalized attention, addressing their specific weaknesses and building on their strengths.</p>
        
        <p>Time management and examination strategy are crucial components of the program. Many students fail not because they lack knowledge, but because they cannot effectively manage the limited time available during the examination. The tutorial program dedicates significant attention to teaching students how to pace themselves, identify questions they can answer quickly, and allocate appropriate time to more challenging questions.</p>
        
        <p>Parents have also noted the value of the structured approach. One parent, whose daughter scored 287 in the last JAMB examination after attending the tutorial program, shared her experience: "Before enrolling in the tutorial, my daughter was anxious and overwhelmed. The program gave her structure, confidence, and the skills she needed. It was worth every investment."</p>
        
        <p>The tutorial program runs for twelve weeks leading up to the examination period, with classes held on weekdays and intensive review sessions on Saturdays. Students who register early benefit from extended preparation time, access to comprehensive study materials, and priority placement in the small tutorial groups that have proven most effective. The program begins four months before the examination date, allowing sufficient time for thorough coverage of all topics and extensive practice.</p>
        
        <p>With university admission becoming more competitive each year, the role of proper JAMB preparation cannot be overstated. The difference between a score of 180 and 250 can be the difference between gaining admission and having to wait another year. As the school's motto states, "What is worth doing at all is worth doing well"—and for students serious about their university education, that means investing in proper preparation.</p>
        
        <p>Registration for the upcoming JAMB tutorial session is now open, with spaces limited to maintain the program's high-quality, personalized approach. Interested students and parents can contact Krelis Legacy College at <strong>+234 816 180 3338</strong> or visit the campus at <strong>18 Atinmo St, Ikosi Ketu, Lagos 105102</strong> for registration and more information about the program. Early registration is strongly encouraged as spaces fill up quickly as the examination date approaches.</p>
      `,
    },
    2: {
      title: "Menstrual Health Awareness: Special Session with Lola Carter",
      date: "March 10, 2025",
      author: "Health & Wellness Team",
      image:
        "/legacy/gallery_world_talks_with_lola_carter_menstraul_talks/IMG-20250206-WA0026.jpg",
      content: `
        <p>Krelis Legacy College hosted a groundbreaking health awareness session last Thursday, bringing renowned health advocate and educator Lola Carter to speak with students about menstrual health and hygiene. The event, titled "World Talks with Lola Carter: Menstrual Health Matters," drew an enthusiastic crowd of students, teachers, and invited guests to the school hall for what would become one of the most impactful health education sessions the school has held.</p>
        
        <p>For many young people, menstruation remains a topic shrouded in silence, misconceptions, and unnecessary stigma. Lola Carter's presentation sought to change that narrative by creating an open, supportive environment where students could learn accurate information and ask questions without embarrassment. "We can't expect young people to make informed decisions about their health when we keep them in the dark," Carter said during her opening remarks. "Education is the most powerful tool we have to break down these barriers."</p>
        
        <p>The two-hour session covered a comprehensive range of topics, from the biological basics of menstruation and what constitutes a normal menstrual cycle to practical guidance on menstrual hygiene management and product selection. Carter emphasized the importance of understanding one's body and recognizing what is normal versus what might require medical attention. She dispelled common myths that have been passed down through generations, addressing misconceptions about physical limitations during menstruation and cultural taboos that have no scientific basis.</p>
        
        <p>One of the most powerful aspects of the session was its interactive nature. Students were encouraged to submit questions anonymously, which Carter then addressed openly and thoroughly. The questions ranged from practical concerns about managing periods during school hours to deeper inquiries about reproductive health and nutrition. "I was surprised by how comfortable everyone became," shared Blessing Okonkwo, a SS2 student who attended the event. "At first, people were shy, but Ms. Carter made it feel so normal to talk about these things. I learned so much that I wish I had known years ago."</p>
        
        <p>Carter, who has over ten years of experience in women's health education and advocacy, brought her characteristic warmth and expertise to the presentation. Her ability to discuss complex health topics in accessible, relatable terms resonated strongly with the student audience. She shared real-life stories and case studies that helped students understand the importance of proper menstrual hygiene and the potential health consequences of neglect.</p>
        
        <p>The session also addressed the practical challenges that many students face. Carter discussed the economic barriers that can prevent access to menstrual hygiene products and advocated for ensuring that no young person's education should be interrupted by their menstrual cycle. This message aligned perfectly with Krelis Legacy College's commitment to student welfare. The school has maintained a menstrual health support program that provides products to students who need them, ensuring that financial constraints never become an obstacle to attending class.</p>
        
        <p>Mrs. Chioma Nwosu, the school's Health and Wellness Coordinator, explained that the event was part of a broader initiative to provide comprehensive health education. "We believe that knowledge empowers our students to make informed decisions about their health and well-being," she said. "This session with Lola Carter was incredibly valuable, and we've already received requests to make such educational programs a regular feature."</p>
        
        <p>The feedback from students was overwhelmingly positive, with many expressing gratitude for the opportunity to learn in such an open and judgment-free environment. Teachers also noted the importance of such sessions, pointing out that health education extends beyond textbooks and requires open dialogue and expert guidance. Several parents who learned about the session through their children later called the school to express their appreciation for the initiative.</p>
        
        <p>Director Ajibola Onanuga, who attended the session, emphasized that this is just the beginning of expanded health education programming at the school. "Education is not just about academics," he noted. "It's about preparing our students for all aspects of life, including understanding and managing their health. We're committed to providing them with the knowledge and resources they need."</p>
        
        <p>The school is planning to host more health awareness sessions throughout the academic year, covering various topics relevant to adolescent health and wellness. For parents interested in learning more about the school's health education programs or upcoming events, contact information is available at the school office. Krelis Legacy College is located at <strong>18 Atinmo St, Ikosi Ketu, Lagos 105102</strong>, and can be reached at <strong>+234 816 180 3338</strong>.</p>
      `,
    },
    3: {
      title:
        "Understanding Secondary School: A Journey of Growth and Discovery",
      date: "February 28, 2025",
      author: "Academic Affairs Department",
      image: "/legacy/advert_for_college_admission_in_progress.jpeg",
      content: `
        <p>As families across Lagos make important decisions about their children's education, Krelis Legacy College's secondary school program continues to distinguish itself as a destination for students seeking both academic excellence and comprehensive personal development. With over two decades of experience in secondary education, the institution has established a reputation for transforming students into confident, capable young adults prepared for the challenges of higher education and beyond.</p>
        
        <p>The secondary school years, spanning from JSS1 to SS3, represent a critical phase in every student's life—a period of tremendous growth, self-discovery, and preparation for the future. At Krelis Legacy College, the approach to secondary education extends far beyond the traditional focus on examination results. While academic achievement remains important, the school has developed a comprehensive program that addresses the intellectual, social, emotional, and ethical development of each student.</p>
        
        <p>"We see secondary education as the foundation upon which our students will build their entire future," explains Mrs. Adebisi Okoro, Head of Secondary School at Krelis Legacy College. "Our job isn't just to help them pass WAEC or NECO—it's to help them discover who they are, what they're capable of, and how they can contribute meaningfully to society. That's a much bigger and more important responsibility."</p>
        
        <p>The academic program follows the Nigerian national curriculum but with enhanced content and teaching methodologies designed to deepen understanding rather than promote rote memorization. Experienced teachers, many with advanced degrees in their subject areas, bring passion and expertise to their classrooms. The school maintains deliberately small class sizes, with no class exceeding 25 students, ensuring that teachers can provide personalized attention and identify when individual students need additional support or challenge.</p>
        
        <p>Modern facilities support the learning process throughout the school. Well-equipped science laboratories allow students to conduct practical experiments that bring textbook concepts to life. The school library, regularly updated with new materials, provides a quiet space for research and independent study. Computer laboratories equipped with current technology ensure that students develop the digital literacy skills increasingly essential in today's world.</p>
        
        <p>Regular assessments track student progress throughout each term, allowing teachers to intervene early when students struggle and to provide advanced materials to those who excel. Parent-teacher conferences each term ensure that parents remain active partners in their children's education, with open communication channels maintained throughout the year. "The partnership between school and home is crucial," notes Director Ajibola Onanuga. "When parents and teachers work together, students thrive."</p>
        
        <p>Beyond academics, the school recognizes that well-rounded development requires diverse experiences. Students participate in sports programs ranging from football and basketball to athletics, learning teamwork, discipline, and healthy competition. The debating club has produced students who compete successfully at the state level, while public speaking training helps even naturally shy students find their voice. Cultural activities, leadership development programs, and community service initiatives ensure that students develop the character and values that will serve them throughout life.</p>
        
        <p>The school's motto, "What is worth doing at all is worth doing well," permeates every aspect of the program. It's a philosophy that encourages excellence while teaching students the value of effort, persistence, and integrity. Teachers regularly discuss this motto with students, applying it to everything from completing homework assignments to treating classmates with respect.</p>
        
        <p>Preparation for the Senior Secondary Certificate Examination begins early in the secondary school journey. Rather than waiting until SS3 to focus on examination techniques, the school integrates examination preparation throughout the curriculum. By the time students reach their final year, they're already familiar with question formats, time management strategies, and the confidence needed to perform under pressure. This systematic approach has contributed to consistently strong performance in national examinations.</p>
        
        <p>Parents consistently cite the school's supportive environment as a key factor in their satisfaction. "My son struggled with mathematics in his previous school," shares one parent, whose son is now in SS1. "The teachers here didn't just identify the problem—they created a plan to address it. Within one term, we saw dramatic improvement. More importantly, his confidence returned. That's what makes a great school."</p>
        
        <p>For families considering secondary school options, the value of choosing the right environment cannot be overstated. The secondary school years shape not just academic outcomes but character, confidence, and future trajectories. Krelis Legacy College invites interested families to experience the school firsthand through campus tours where prospective students and parents can see classrooms in action, meet teachers, and speak with current students about their experiences.</p>
        
        <p>Admission for the 2026/2027 academic session is currently ongoing, with spaces available in all secondary school classes. The admission process includes completion of an application form, an entrance examination to ensure appropriate placement, and an interview where the school can learn about each prospective student's interests, goals, and needs. Early application is encouraged as spaces are limited.</p>
        
        <p>Families interested in learning more about Krelis Legacy College's secondary school program can schedule a tour by contacting the school at <strong>+234 816 180 3338</strong> or visiting the campus at <strong>18 Atinmo St, Ikosi Ketu, Lagos 105102</strong>. The admissions team is available to answer questions, provide detailed information about the curriculum, and discuss how the school can support each student's unique educational journey.</p>
      `,
    },
  };

  const article = newsArticles[id];

  if (!article) {
    return (
      <div className="news-detail">
        <div className="container">
          <div className="error-message">
            <h2>Article Not Found</h2>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/" className="back-link">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        <article className="article-content">
          <div className="article-header">
            <h1>{article.title}</h1>
            <div className="article-meta">
              <span className="date">{article.date}</span>
              <span className="separator">•</span>
              <span className="author">By {article.author}</span>
            </div>
          </div>

          <div className="article-image">
            <img src={article.image} alt={article.title} />
          </div>

          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}

export default NewsDetail;
