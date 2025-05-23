import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { EnrolledCourseServices } from './enrolledCourse.service'

const createEnrolledCourse = catchAsync(async (req, res) => {
  const userId = req.user.userId
  const result = await EnrolledCourseServices.createEnrolledCourseIntoDB(
    userId,
    req.body
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is enrolled succesfully',
    data: result,
  })
})

const updateEnrolledCourseMarks = catchAsync(async (req, res) => {
  const facultyId = req.user.userId
  const result = await EnrolledCourseServices.updateEnrolledCourseMarksIntoDB(
    facultyId,
    req.body
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Marks is updated succesfully',
    data: result,
  })
})

const getAllEnrolledCourses = catchAsync(async (req, res) => {
  const facultyId = req.user.userId

  const result = await EnrolledCourseServices.getAllEnrolledCoursesFromDB(
    facultyId,
    req.query
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled courses are retrieved successfully',
    data: result.result,
  })
})

const getMyEnrolledCourses = catchAsync(async (req, res) => {
  const studentId = req.user.userId

  const result = await EnrolledCourseServices.getMyEnrolledCoursesFromDB(
    studentId,
    req.query
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Enrolled courses are retrieved successfully',
    data: result.result,
  })
})

export const EnrolledCourseControllers = {
  createEnrolledCourse,
  updateEnrolledCourseMarks,
  getAllEnrolledCourses,
  getMyEnrolledCourses,
}
