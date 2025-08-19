import React from "react";

// Grouped projects by category with your original links
const projects = {
  "Web Design": [
    {
      title: "RRALY Real Estate Website",
      description:
        "Full website built with JS, HTML, CSS, featuring property listings and modern UI.",
      image: "/screenshot 2025-08-16 092759.jpg",
      link: "http://rralyrealestate.com/home.html",
    },
    {
      title: "RANG Real Estate Website",
      description:
        "Designed and developed the homepage and property showcase sections.",
      image: "/screenshot 2025-08-16 092638.jpg",
      link: "https://rang-realestate.com/",
    },
    {
      title: "RANGVet PLC Website",
      description:
        "Built the website with scrollable product sections, animations, and Tailwind styling.",
      image: "/screenshot 2025-08-16 092738.jpg",
      link: "https://rangvet.com/",
    },
  ],
  "Social Media/Video": [
    {
      title: "RANGVet TikTok Marketing",
      description:
        "Short Created and managed TikTok campaigns for RANGVet PLC, including short video edits, product-focused posters, and engaging captions. Helped increase brand awareness and engagement.",
      image: "/screenshot 2025-08-16 093317.jpg",
      link: "https://www.tiktok.com/@rangvet_plc?is_from_webapp=1&sender_device=pc,yetiktok",
    },
    {
      title: "Instagram Carousel (Test)",
      description: "Carousel designed for a company’s Instagram account.",
      image: "/screenshot 2025-08-16 093458.jpg",
      link: "https://www.canva.com/design/DAGvMqKo6ZQ/-6gClA2kmqUHqGwjHQw83w/view?utm_content=DAGvMqKo6ZQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview",
    },
    {
      title: "Instagram Carousel 1",
      description: "A carousel for company’s Instagram.",
      image: "/screenshot 2025-08-16 093625.jpg",
      link: "https://www.canva.com/design/DAGvNit1y_8/4ckZQW5qeJKuE8QHQUjBuQ/view?utm_content=DAGvNit1y_8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview/example1",
    },
    {
      title: "Video for Instagram and TikTok",
      description: "Informational video to promote a company.",
      image: "/screenshot 2025-08-16 093749.jpg",
      link: "https://www.canva.com/design/DAGvH1cAEpA/6PX1mMstd84FY_wvXZJbkg/view?utm_content=DAGvH1cAEpA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview/DAGvMqKo6ZQ/example2",
    },
  ],
  "Graphic Design / Poster": [
   {
  title: "Notebook Design (Cover & Inside Poster)",
  category: "Poster / Print Design",
  description:
    "Designed a clean notebook cover featuring RANGVet group companies, and an inside poster showcasing products and services in A5 layout.",
  image: "/screenshot 2025-08-16 093916.jpg", // 
  link: "#https://www.canva.com/design/DAGveVTfj44/POv--OABEzWHnDT7CfWH7g/view?utm_content=DAGveVTfj44&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview", // or upload it to Behance/Dribbble/Google Drive and paste the link
},

  ],
  "Poster Design": [
    {
      title: "Veterinary Medicine Poster",
      description:
        "A5 poster design with Amharic/English branding for RANGVet PLC.",
      image: "/ዲሚናል (Diminal).png",
      link: "https://www.canva.com/design/DAGvFRtnBfU/of03BffU6Zkv54BJIEK7Jg/view?utm_content=DAGvFRtnBfU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview", // Replace with your poster link
    },
    {
      title: "Veterinary Medicine Poster",
      description:
        "A5 poster design with Amharic/English branding for RANGVet PLC.",
      image: "/photo_2025-08-18_09-09-14.jpg",
      link: "https://www.canva.com/design/DAGunkKdXTE/7brTqp6aLhULuIXk2a-Vzw/view?utm_content=DAGunkKdXTE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview", // Replace with your poster link
    },
  ],
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {Object.entries(projects).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition transform duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}