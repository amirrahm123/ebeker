import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import LegalTeam from './pages/LegalTeam'
import Damages from './pages/Damages'
import MedicalMalpractice from './pages/MedicalMalpractice'
import Insurance from './pages/Insurance'
import MarineAccidents from './pages/MarineAccidents'
import StudentAccidents from './pages/StudentAccidents'
import Wills from './pages/Wills'
import TaxExemption from './pages/TaxExemption'
import PowerOfAttorney from './pages/PowerOfAttorney'
import CausesOfDeath from './pages/CausesOfDeath'
import PressTort from './pages/PressTort'
import PressInsurance from './pages/PressInsurance'
import PressDefense from './pages/PressDefense'
import PressCarAccidents from './pages/PressCarAccidents'
import CarAccidents from './pages/CarAccidents'
import WorkAccidents from './pages/WorkAccidents'
import OccupationalDiseases from './pages/OccupationalDiseases'
import Disabilities from './pages/Disabilities'
import IdfDisabilities from './pages/IdfDisabilities'
import Recommendations from './pages/Recommendations'
import EransTip from './pages/EransTip'
import MediaTV from './pages/MediaTV'
import MediaRadio from './pages/MediaRadio'
import MediaLectures from './pages/MediaLectures'
import AccessibilityStatement from './pages/AccessibilityStatement'
import Admin from './pages/Admin'

function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-1VQ4L8M74D', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
  return null
}

export default function App() {
  return (
    <>
      <RouteTracker />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="legal-team" element={<LegalTeam />} />
        <Route path="team" element={<Navigate to="/legal-team" replace />} />
        <Route path="damages" element={<Damages />} />
        <Route path="medical-malpractice" element={<MedicalMalpractice />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="marine-accidents" element={<MarineAccidents />} />
        <Route path="student-accidents" element={<StudentAccidents />} />
        <Route path="wills" element={<Wills />} />
        <Route path="tax-exemption" element={<TaxExemption />} />
        <Route path="power-of-attorney" element={<PowerOfAttorney />} />
        <Route path="causes-of-death" element={<CausesOfDeath />} />
        <Route path="press-tort" element={<PressTort />} />
        <Route path="press-insurance" element={<PressInsurance />} />
        <Route path="press-defense" element={<PressDefense />} />
        <Route path="car-accidents" element={<CarAccidents />} />
        <Route path="work-accidents" element={<WorkAccidents />} />
        <Route path="occupational-diseases" element={<OccupationalDiseases />} />
        <Route path="disabilities" element={<Disabilities />} />
        <Route path="idf-disabilities" element={<IdfDisabilities />} />
        <Route path="press-car-accidents" element={<PressCarAccidents />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="eranstip" element={<EransTip />} />
        <Route path="media/tv" element={<MediaTV />} />
        <Route path="media/radio" element={<MediaRadio />} />
        <Route path="media/lectures" element={<MediaLectures />} />
        <Route path="accessibility" element={<AccessibilityStatement />} />
      </Route>
      <Route path="admin" element={<Admin />} />
    </Routes>
    </>
  )
}
