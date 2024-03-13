import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class

@Injectable({
  providedIn: 'root'
})
export class ImageGeneratorService {
  
  private readonly httpClient = inject(HttpClient);

  public getImages(prompt: string, numberOfImages: number): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:3000/api/images?prompt=${prompt}&n=${numberOfImages}`);
  }
}
