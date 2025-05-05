import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Star, Home, Leaf, Trophy, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-green-700" />
            <span className="font-bold text-xl text-green-800">ЛесДом</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-green-800 hover:text-green-600">Главная</Link>
            <Link to="/" className="text-gray-600 hover:text-green-600">Коттеджи</Link>
            <Link to="/" className="text-gray-600 hover:text-green-600">Локации</Link>
            <Link to="/" className="text-gray-600 hover:text-green-600">О нас</Link>
            <Link to="/" className="text-gray-600 hover:text-green-600">Контакты</Link>
          </nav>
          <Button className="bg-green-700 hover:bg-green-800">Забронировать</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Уютные коттеджи в лесу</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">Отдохните от городской суеты в наших комфортабельных домах, расположенных в живописных лесных уголках России</p>
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
            <Tabs defaultValue="date" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="date">Даты</TabsTrigger>
                <TabsTrigger value="location">Локация</TabsTrigger>
                <TabsTrigger value="guests">Гости</TabsTrigger>
              </TabsList>
              
              <TabsContent value="date" className="flex space-x-4">
                <div className="flex-1 flex items-center border rounded-md p-3">
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Заезд" 
                    className="w-full outline-none" 
                  />
                </div>
                <div className="flex-1 flex items-center border rounded-md p-3">
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="Выезд" 
                    className="w-full outline-none" 
                  />
                </div>
                <Button className="bg-green-700 hover:bg-green-800 px-8">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </TabsContent>
              
              <TabsContent value="location" className="flex space-x-4">
                <div className="flex-1 flex items-center border rounded-md p-3">
                  <input 
                    type="text" 
                    placeholder="Выберите локацию" 
                    className="w-full outline-none" 
                  />
                </div>
                <Button className="bg-green-700 hover:bg-green-800 px-8">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </TabsContent>
              
              <TabsContent value="guests" className="flex space-x-4">
                <div className="flex-1 flex items-center border rounded-md p-3">
                  <input 
                    type="number" 
                    placeholder="Количество гостей" 
                    className="w-full outline-none" 
                    min="1"
                  />
                </div>
                <Button className="bg-green-700 hover:bg-green-800 px-8">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Найти
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Home className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Комфортные дома</h3>
              <p className="text-gray-600">Наши коттеджи оборудованы всем необходимым для комфортного отдыха в любое время года</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Живописные локации</h3>
              <p className="text-gray-600">Все дома расположены в экологически чистых районах среди красивейших лесных пейзажей</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Trophy className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокий сервис</h3>
              <p className="text-gray-600">Мы обеспечиваем высокий уровень обслуживания и помощь в организации вашего отдыха</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cottages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Популярные коттеджи</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Лесная Заимка",
                image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
                location: "Карелия",
                price: 12000,
                rating: 4.9
              },
              {
                id: 2,
                title: "Сосновый Бор",
                image: "https://images.unsplash.com/photo-1604014838577-65a169fac269",
                location: "Подмосковье",
                price: 9500,
                rating: 4.7
              },
              {
                id: 3,
                title: "Горный Ручей",
                image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
                location: "Алтай",
                price: 15000,
                rating: 4.8
              }
            ].map((cottage) => (
              <Card key={cottage.id} className="overflow-hidden">
                <img 
                  src={cottage.image} 
                  alt={cottage.title} 
                  className="h-60 w-full object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{cottage.title}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm">{cottage.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{cottage.location}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{cottage.price} ₽<span className="text-sm font-normal text-gray-600"> / ночь</span></p>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">Смотреть все коттеджи</Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Отзывы наших гостей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Анна К.",
                text: "Прекрасный отдых в окружении природы. Коттедж очень уютный, все необходимое есть. Обязательно вернемся снова!",
                rating: 5
              },
              {
                id: 2,
                name: "Сергей М.",
                text: "Отличное место для семейного отдыха. Дети были в восторге от прогулок по лесу и барбекю на свежем воздухе.",
                rating: 5
              },
              {
                id: 3,
                name: "Елена Д.",
                text: "Потрясающая природа и очень комфортный домик. Все продумано до мелочей. Спасибо за прекрасный отдых!",
                rating: 4
              }
            ].map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-semibold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                        />
                      ))
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </Card>
            ))
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы отдохнуть от городской суеты?</h2>
            <p className="text-lg mb-8">Забронируйте коттедж прямо сейчас и погрузитесь в атмосферу природы и спокойствия</p>
            <Button className="bg-green-700 hover:bg-green-800 px-8 py-6 text-lg">Забронировать коттедж</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6 text-green-400" />
                <span className="font-bold text-xl">ЛесДом</span>
              </div>
              <p className="text-gray-400">Уютные коттеджи в живописных лесных уголках для вашего комфортного отдыха</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Меню</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Главная</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Коттеджи</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Локации</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">О нас</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@lesdom.ru</li>
                <li>+7 (800) 123-45-67</li>
                <li>г. Москва, ул. Лесная, 10</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Подписка</h3>
              <p className="text-gray-400 mb-2">Подпишитесь на новости и специальные предложения</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                />
                <Button className="bg-green-700 hover:bg-green-800 rounded-l-none">ОК</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p> 2025 ЛесДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;