


export default function Footer() {
  return (
      <footer className="py-4 mt-auto text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-center md:text-left mb-4 md:mb-0">
                  <p>
                      COPYRIGHT © 2024 War Dog Boxing - ALL RIGHTS RESERVED.
                  </p>
              </div>
              <div className="text-sm text-center md:text-right">
                  <p>
                      Developed By: <a href="https://www.brucesailes.com" target="_blank" rel="noopener noreferrer" className='underline text-white hover:text-blue-500'>Bruce Sailes</a>
                  </p>
              </div>
          </div>
      </footer>
  );
}
