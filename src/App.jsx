import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, TrendingUp, Target, Users, Star, ArrowRight, Download, BookOpen, DollarSign } from 'lucide-react'
import ebookCover from './assets/ebook_cover.png'
import './App.css'

function App() {
  const [isHovered, setIsHovered] = useState(false)

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Maximiza tu ROI Personal",
      description: "Aprende a invertir en ti mismo y obtener el mayor retorno de inversión en todas las áreas de tu vida."
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Gestión de Recursos Eficiente",
      description: "Domina los conceptos de déficit y superávit aplicados a tu energía, nutrición y productividad."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Construye Capital Social",
      description: "Desarrolla relaciones valiosas y una red de apoyo que potencien tu crecimiento personal."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-600" />,
      title: "Método Rikoverin",
      description: "Un enfoque único que combina principios económicos con desarrollo personal para resultados extraordinarios."
    }
  ]

  const testimonials = [
    {
      name: "Carlos M.",
      rating: 5,
      comment: "Este ebook cambió completamente mi perspectiva sobre el crecimiento personal. La analogía económica es brillante."
    },
    {
      name: "Miguel R.",
      rating: 5,
      comment: "Después de una ruptura devastadora, este libro me ayudó a reconstruirme desde cero. Altamente recomendado."
    },
    {
      name: "Andrés L.",
      rating: 5,
      comment: "El enfoque práctico y las rutinas de gimnasio son exactamente lo que necesitaba. Resultados visibles en semanas."
    }
  ]

  const chapters = [
    "Diagnóstico Financiero Personal: Identificando tus Activos y Pasivos",
    "La Inversión Más Rentable: Tú Mismo",
    "Gestión de Recursos: Déficit y Superávit en tu Energía y Nutrición",
    "El Gimnasio como tu Bolsa de Valores: Construyendo Capital Físico",
    "Fútbol: La Externalidad Positiva de tu Bienestar Social y Mental",
    "Productividad Personal: Maximizando tu Retorno Diario",
    "Gestión de Riesgos y Costo de Oportunidad: Evitando la Bancarrota Personal"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-800">High Performance Mindset</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Obtener Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Método Rikoverin
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  High Performance
                  <span className="text-blue-600 block">Mindset</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  La Economía de tu Transformación - Un Viaje de Inversión hacia el Hombre de Alto Valor
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  Transforma tu vida aplicando principios económicos a tu desarrollo personal. 
                  Aprende a maximizar tu ROI en salud, relaciones y productividad.
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>7 Capítulos Completos</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Rutinas Prácticas</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Ejercicios Aplicables</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Comprar por $29.99
                  <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  Vista Previa Gratuita
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-110"></div>
                <img 
                  src={ebookCover} 
                  alt="High Performance Mindset Ebook Cover" 
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué este ebook transformará tu vida?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubre un enfoque revolucionario que combina principios económicos con desarrollo personal 
              para crear un sistema de transformación sostenible y medible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-slate-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Contenido del Ebook
            </h2>
            <p className="text-xl text-slate-600">
              7 capítulos diseñados para transformar tu mentalidad y resultados
            </p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-md transition-shadow">
                <CardContent className="py-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{chapter}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Lo que dicen nuestros lectores
            </h2>
            <p className="text-xl text-slate-600">
              Testimonios reales de hombres que transformaron sus vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-slate-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comienza tu transformación hoy
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            No esperes más para invertir en el activo más valioso: tú mismo. 
            Descarga el ebook y comienza tu viaje hacia convertirte en un hombre de alto valor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              <DollarSign className="w-5 h-5 mr-2" />
              Comprar por $29.99
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Más Información
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-blue-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Descarga Inmediata</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">High Performance Mindset</span>
              </div>
              <p className="text-slate-400">
                Transformando vidas a través de la aplicación de principios económicos al desarrollo personal.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre el Autor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Reembolso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 High Performance Mindset. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

