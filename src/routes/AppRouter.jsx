import React, { Suspense } from 'react'
import Spinner from '@/components/loading/Spinner'
import MainLayout from '@/layout/MainLayout'
import MainPage from '@/pages/MainPage'
import SearchPage from '@/pages/SearchPage'
import SearchPopularPage from '@/pages/SearchPopularPage'
import NotFoundPage from '@/pages/NotFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyPage from '@/pages/MyPage'
import ListPage from '@/pages/ListPage'
import DetailPage from '@/pages/DetailPage'
import CalendarPage from '@/pages/CalendarPage'
import MapPage from '@/pages/MapPage'
import PlanPage from '@/pages/PlanPage'
import RegisterPage from '@/pages/RegisterPage'
import SelectDatePage from '@/pages/SelectDatePage'
import LoginPage from '@/pages/LoginPage'
import { RequireAuth } from '@/hooks/requireAuth'
import ProfileEditPage from '@/pages/ProfileEditPage'
import SaveListPage from '@/pages/SaveListPage'
import FirstLoadingPage from '@/pages/FirstLoadingPage'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Spinner />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<Spinner />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: '/searchPopular',
        element: (
          <Suspense fallback={<Spinner />}>
            <SearchPopularPage />
          </Suspense>
        ),
      },
      {
        path: '/mypage',
        element: (
          <RequireAuth>
            <Suspense fallback={<Spinner />}>
              <MyPage />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: '/plan/:tripId',
        element: (
          <Suspense fallback={<Spinner />}>
            <PlanPage />
          </Suspense>
        ),
      },
      {
        path: '/calendar',
        element: (
          <RequireAuth>
            <Suspense fallback={<Spinner />}>
              <CalendarPage />
            </Suspense>
          </RequireAuth>
        ),
      },
      {
        path: '/list',
        element: (
          <Suspense fallback={<Spinner />}>
            <ListPage />
          </Suspense>
        ),
      },
      {
        path: '/detail/:contenttypeid/:contentid',
        element: (
          <Suspense fallback={<Spinner />}>
            <DetailPage />
          </Suspense>
        ),
      },
      {
        path: '/map',
        element: (
          <Suspense fallback={<Spinner />}>
            <MapPage />
          </Suspense>
        ),
      },
      {
        path: '/register',
        element: (
          <Suspense fallback={<Spinner />}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: '/selectDate',
        element: (
          <Suspense fallback={<Spinner />}>
            <SelectDatePage />
          </Suspense>
        ),
      },
      {
        path: '/login',
        element: (
          <Suspense fallback={<Spinner />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: '/saveList',
        element: (
          <Suspense fallback={<Spinner />}>
            <SaveListPage />
          </Suspense>
        ),
      },
      {
        path: '/profileEdit',
        element: (
          <Suspense fallback={<Spinner />}>
            <ProfileEditPage />
          </Suspense>
        ),
      },
      {
        path: '/firstLoading',
        element: (
          <Suspense fallback={<Spinner />}>
            <FirstLoadingPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={AppRouter} fallbackElement={<Spinner />} />
}
