

export default function ContactForm (){
    const color = `hsl(${Math.random() * 360}, 100%, 25%)`;

    return (
            <form className="max-w-xl mx-auto my-16 p-4 rounded-lg shadow-md bg-gray-200">
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first-name">
                First Name
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="first-name" type="text" placeholder="Jane"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last-name">
                Last Name
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Doe"/>
                </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                Email
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane@example.com"/>
                </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
                Phone Number
                </label>
                <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="text" placeholder="(123) 456-7890"/>
                </div>
                </div>
                <button className="bg-blue-500 hover:scale-105 text-white font-bold py-2 px-4 rounded-lg w-32 mx-auto mt-6">
                    Submit
                </button>
            </form>
        )
  }