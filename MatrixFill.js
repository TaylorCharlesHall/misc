var determ = 0;
var matrix = [];
while ((determ != 1) || (determ != -1)) { 

    console.log('thinking...');
    


function MatrixFill() {
var rows = [];//rows to put into matrix
 
    matrix = [];
    function RanSixt() { 
          
         let x = Math.floor(Math.random()*3);//random values from < multiplier
         return x;
     } 
    
    
    
     for (i=0; i<2; i++){

         rows[i]=[];

         for (h=0; h<2; h++) {
           
             rows[i].push(RanSixt());

         }

         matrix.push(rows[i]);//pushes array of random values 
         //to matrix with given index for i an h

     }

 }
    


//code used from https://www.geeksforgeeks.org/determinant-of-a-matrix/
// Case 1: If there is no non-zero element. In this case, the determinant of a matrix is zero 
// Case 2: If there exists a non-zero element there exist two cases 
// Case A: If the index is with a respective diagonal row element. Using the determinant properties make all the column elements down to it zero
// Case B: Swap the row with respect to the diagonal element column and continue the Case A operation.
 
// Function to get determinant of matrix
function determinantOfMatrix(mat , n)
{
    var num1, num2, det = 1, index,
                    total = 1; // Initialize result

    // temporary array for storing row
    var temp = Array(n + 1).fill(0);

    // loop for traversing the diagonal elements
    for (i = 0; i < n; i++)
    {
        index = i; // initialize the index

        // finding the index which has non zero value
        while (index < n && mat[index][i] == 0)
        {
            index++;
        }
        if (index == n) // if there is non zero element
        {
            // the determinant of matrix as zero
            continue;
        }
        if (index != i)
        {
            // loop for swapping the diagonal element row
            // and index row
            for (j = 0; j < n; j++)
            {
                swap(mat, index, j, i, j);
            }
            // determinant sign changes when we shift
            // rows go through determinant properties
            det = parseInt((det * Math.pow(-1, index - i)));
        }

        // storing the values of diagonal row elements
        for (j = 0; j < n; j++)
        {
            temp[j] = mat[i][j];
        }

        // traversing every row below the diagonal
        // element
        for (j = i + 1; j < n; j++)
        {
            num1 = temp[i]; // value of diagonal element
            num2 = mat[j]
                      [i]; // value of next row element

            // traversing every column of row
            // and multiplying to every row
            for (k = 0; k < n; k++)
            {
                // multiplying to make the diagonal
                // element and next row element equal
                mat[j][k] = (num1 * mat[j][k])
                            - (num2 * temp[k]);
            }
            total = total * num1; // Det(kA)=kDet(A);
        }
    }

    // multiplying the diagonal elements to get
    // determinant
    for (i = 0; i < n; i++)
    {
        det = det * mat[i][i];
    }
    return (det / total); // Det(kA)/k=Det(A);
}

 function swap(arr , i1 , j1 , i2,
                     j2)
{
    var temp = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = temp;
    return arr;
}
//^^^^^end code used from https://www.geeksforgeeks.org/determinant-of-a-matrix/ 

MatrixFill();
determ = determinantOfMatrix(matrix, 2);

}

let textArr = '';
for (i=0; i<2; i++){
     for (h=0; h<2; h++){
        textArr+=matrix[i][h]+' ';
   }
   console.log(textArr);
   textArr='';
}










