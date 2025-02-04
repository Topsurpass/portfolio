# TNP - The New Path

TNP (The New Path) is a web application designed to help individuals overcome personal spiritual challenges such as lackadesical attitudes towards the things of God, and make them engage in meaningful spiritual courses. The application provides a structured platform for users to track their habits, take courses, complete lessons, participate in quizzes, and interact with accountability groups for collective growth.

---

## Features

### User Management

- **Registration**: Users can register as individuals or mentors.
- **Authentication**: Secure login and logout functionality.

### Spiritual Courses

- **Course Catalog**: View and enroll in various spiritual courses categorized by themes.
- **Lesson Content**: Lessons delivered as text, audio, or video formats.
- **Quizzes**: Each lesson includes a graded quiz.
- **Course Grading**: Users receive a course score based on their average lesson scores.

### Habit Tracking

- Track daily progress toward personal goals.
- Mark habits as completed and add notes for reflection.

### Journaling

- Document insights gotten on all lessons in a particular course.
- Revisit journal for meditation.

### Accountability Groups

- Join or create groups for collaborative growth.
- Assign group roles like `leader` or `member`.
- View group details and manage memberships.

### Progress Tracking

- Monitor progress for each enrolled course.
- View lesson completion status, scores, and overall performance.

---

## Tech Stack

### Backend

- **Django**: Manages the backend logic and APIs.
- **Django REST Framework (DRF)**: Provides RESTful APIs for frontend integration.

### Frontend

- **React**: Builds a responsive, dynamic user interface.
- **TypeScript**: Ensures type safety and scalability.
- **TailwindCSS**: For elegant and efficient styling.

### Database

- **MySQL**: Stores user data, course content, and progress.

### Deployment

- **Docker**: Containerizes the application for consistent environments.
- **CI/CD**: Automated testing and deployment pipeline.

---

## Installation

### Prerequisites

- Node.js
- Python 3.10+
- MySQL
- Docker (optional)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Topsurpass/TNP.git
    cd tnp/backend
    ```
2. Create a virtual environment and activate it:
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows: env\Scripts\activate
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Configure the `.env` file with database credentials.
5. Apply migrations:
    ```bash
    python manage.py migrate
    ```
6. Run the development server:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Topsurpass/TNP.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd TNP
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Submit a pull request.

---

## License

Work in progress

---

## Contact

For inquiries or support, reach out to [Temitope Olowosuyi](mailto:temitopeabiodun685@gmail.com).
