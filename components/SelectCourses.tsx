"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function SelectCourses() {
  const [courses, setCourses] = useState<{ id: string; code: string; name: string }[]>([]);
  useEffect(() => {
    async function fetchCourses() {
      try {
        const allCourses = await prisma.course.findMany();
        setCourses(allCourses);
      } catch (error) {
        console.error("Database error:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
    <h2>Courses</h2>
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          {course.code} - {course.name}
        </li>
      ))}
    </ul>
  </div>
  );
};